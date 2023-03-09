import { CosmosClient } from "@azure/cosmos";
import CosmosDbConfig from "../Config/database";

const options = {
    endpoint: CosmosDbConfig.Endpoint,
    key: CosmosDbConfig.Key,
    userAgentSuffix: 'OrderTracking'
  };

const client = new CosmosClient(options);

const DatabaseService = {
    getOrders: async () => {        
        const querySpec = {
            query: 'SELECT * FROM Orders',
        };

        const { resources: orders } = await client
            .database(CosmosDbConfig.DatabaseId)
            .container(CosmosDbConfig.Container)
            .items.query(querySpec)
            .fetchAll()
        return orders;
    }
};

export default DatabaseService;