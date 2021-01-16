const path = require("path");
const { mergeTypes, mergeResolvers, fileLoader } = require("merge-graphql-schemas");
const { makeExecutableSchema } = require("graphql-tools");

const resolversArray = fileLoader(path.join(__dirname, "./resolvers/**/*.js"));
const typesArray = fileLoader(path.join(__dirname, "./typesDefs/**/*.gql"));

const resolvers = mergeResolvers(resolversArray);
const typeDefs = mergeTypes(typesArray);

const schema = makeExecutableSchema({ typeDefs, resolvers });

exports = { typeDefs, resolvers };

module.exports = schema