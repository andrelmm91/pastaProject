const { dataBaseName, mongoDbCredentials } = require("./mongodbPassword");

const mongodbConnection =
  "mongodb+srv://" +
  mongoDbCredentials.userName +
  ":" +
  mongoDbCredentials.password +
  "@" +
  mongoDbCredentials.cluster +
  "/" +
  dataBaseName +
  "?retryWrites=true&w=majority";

exports.mongodbConnection = mongodbConnection;
