const { ApolloServer } = require("apollo-server-express");
const schema = require("../graphql");
const app = require("./app");

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

module.exports = app;
