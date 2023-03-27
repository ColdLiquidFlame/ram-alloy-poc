import { CosmosClient } from "@azure/cosmos";
import CosmosDbConfig from "../Config/database";

const options = {
  endpoint: CosmosDbConfig.Endpoint,
  key: CosmosDbConfig.Key,
  userAgentSuffix: "OrderTracking",
};

const containerId = "Orders";

const client = new CosmosClient(options);

const getOrders = async (query, parameters) => {
  const querySpec = {
    query:
      query ??
      "SELECT * FROM Orders o WHERE (NOT(IS_DEFINED(o.deleted)) or o.deleted != true)",
    parameters,
  };

  const { resources: orders } = await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();
  return orders;
};

const getOrderById = async (orderId) => {
  const query =
    "SELECT * FROM Orders o WHERE (NOT(IS_DEFINED(o.deleted)) or o.deleted != true) AND o.id = @OrderId";
  const parameters = [
    {
      name: "@OrderId",
      value: orderId,
    },
  ];

  const orders = await getOrders(query, parameters);

  const [order] = orders;

  return order;
};

const saveOrder = async ({ orderId, user }) => {
  let order = await getOrderById(orderId);

  if (order === undefined) {
    order = { id: orderId, user, createdDate: new Date() };
    await client
      .database(CosmosDbConfig.DatabaseId)
      .container(containerId)
      .items.upsert(order);
  }
};

const addLogToOrder = async (orderId, log) => {
  var { logs = [] } = await getOrderById(orderId);

  const patch = { op: "add", path: "/logs", value: [...logs, log] };

  await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .item(orderId, orderId)
    .patch([patch]);
};

const deleteLogFromOrder = async (orderId, log, deleted = true) => {
  const { logs = [] } = await getOrderById(orderId);

  const updatedlogs = logs.map((l) => {
    if (
      l.station === log.station &&
      l.status === log.status &&
      l.createdDate === log.createdDate
    ) {
      return {
        ...l,
        deleted: true,
      };
    }

    return l;
  });

  const patch = { op: "add", path: "/logs", value: updatedlogs };

  await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .item(orderId, orderId)
    .patch([patch]);
};

const deleteOrder = async (orderId, deleted = true) => {
  const patch = { op: "add", path: "/deleted", value: deleted };

  await client
    .database(CosmosDbConfig.DatabaseId)
    .container(containerId)
    .item(orderId, orderId)
    .patch([patch]);
};

const getOrderLogsByWorkOrderId = async (orderId) => {
  const order = await OrderTrackingService.getOrderById(orderId);
  const logs = order?.logs ?? [];
  return logs.filter((l) => !(l?.deleted ?? false));
};

const OrderTrackingService = {
  getOrders,
  getOrderById,
  saveOrder,
  deleteOrder,
  addLogToOrder,
  deleteLogFromOrder,
  getOrderLogsByWorkOrderId,
};

export default OrderTrackingService;
