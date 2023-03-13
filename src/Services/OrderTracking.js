import { CosmosClient } from "@azure/cosmos";
import CosmosDbConfig from "../Config/database";

const options = {
    endpoint: CosmosDbConfig.Endpoint,
    key: CosmosDbConfig.Key,
    userAgentSuffix: 'OrderTracking'
  };

const containerId = "Orders";

const client = new CosmosClient(options);

const OrderTrackingService = {
    getOrders: async () => {        
        const querySpec = {
            query: 'SELECT * FROM Orders',
        };

        const { resources: orders } = await client
            .database(CosmosDbConfig.DatabaseId)
            .container(containerId)
            .items
            .query(querySpec)
            .fetchAll()
        return orders;
    },
    getOrderById: async (id) => {
       var order = await client
            .database(CosmosDbConfig.DatabaseId)
            .container(containerId)
            .item(id)
            .read()

        return order;
    },
    insertOrderLog: async (orderLog) => {
        await client
        .database(CosmosDbConfig.DatabaseId)
        .container(containerId)
        .items
        .create(orderLog);
    }
};

export default OrderTrackingService;