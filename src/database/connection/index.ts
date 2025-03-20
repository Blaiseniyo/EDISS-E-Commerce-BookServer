import { DBConfiguration } from "./connection.schema";
import { DatabaseConnectionFactory } from "./databaseFactory";

// Create and initialize connection
const placeholderCredentials: DBConfiguration = {
  database: "mysql",
  username: "mysql",
  password: "mysql",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
};
const connection = new DatabaseConnectionFactory(
  placeholderCredentials
).createConnection();

DatabaseConnectionFactory.testConnection(connection);

export default connection;
