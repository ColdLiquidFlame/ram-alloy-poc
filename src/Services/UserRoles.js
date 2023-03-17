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
    query: "SELECT * FROM Orders",
  };

  const { resources: orders } = await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();
  return orders;
};

const getRolesByUserId = async (userId) => {
  var response = await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .item(userId, userId)
    .read();

  return response.item;
};

const updateUserRoles = async (userRoles) => {
  const { id, email } = userRoles;

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
      .items.upsert({ id, email, roles: [] });
  } else if (existingUserRole?.email !== email) {
    await client
      .database(CosmosDbConfig.DatabaseId)
      .container(containerId)
      .item(id)
      .patch({ email: email });
  }

  return existingUserRole;
};

const service = {
  getUserRoles,
  getRolesByUserId,
  updateUserRoles,
};

export default service;
