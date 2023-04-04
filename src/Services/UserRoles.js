import { CosmosClient } from "@azure/cosmos";
import CosmosDbConfig from "../Config/database";

const options = {
  endpoint: CosmosDbConfig.Endpoint,
  key: CosmosDbConfig.Key,
  userAgentSuffix: "UserRoles",
};

const containerId = "UserRoles";

const client = new CosmosClient(options);

const getUserRoles = async () => {
  const querySpec = {
    query: "SELECT * FROM UserRoles",
  };

  const { resources: users } = await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();
  return users;
};

const getRolesByUserId = async (userId) => {
  var response = await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .item(userId, userId)
    .read();

  return response.item;
};

const updateUser = async (userRoles) => {
  const { id, email, nickname } = userRoles;

  const querySpec = {
    query: "SELECT * FROM UserRoles ur WHERE ur.id = @UserId",
    parameters: [
      {
        name: "@UserId",
        value: id,
      },
    ],
  };

  const { resources: existingUserRoles } = await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();

  let [existingUserRole] = existingUserRoles;

  if (existingUserRole === undefined) {
    existingUserRole = { id, email, roles: [] };
    await client
      .database(CosmosDbConfig.DatabaseId)
      .container(containerId)
      .items.upsert(existingUserRole);
  } else {
    const patchOperations = [];
    if (existingUserRole?.email !== email) {
      patchOperations.push({ op: "add", path: "/email", value: email });
    }

    if (existingUserRole?.nickname !== nickname) {
      patchOperations.push({ op: "add", path: "/nickname", value: nickname });
    }

    if (patchOperations.length > 0) {
      await client
        .database(CosmosDbConfig.DatabaseId)
        .container(containerId)
        .item(id, id)
        .patch(patchOperations);
    }
  }

  return existingUserRole;
};

const updateRoles = async ({ id, roles }) => {
  await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .item(id, id)
    .patch([{ op: "add", path: "/roles", value: roles }]);
};

const UserRoleService = {
  getUserRoles,
  getRolesByUserId,
  updateUser,
  updateRoles,
};

export default UserRoleService;
