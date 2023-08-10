const { dataBaseName, mongoDbCredentials } = require("./mongoDbCredentials");

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
