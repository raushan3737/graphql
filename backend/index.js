const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema/schema");
const resolvers = require("./src/resolver/resolver");

// Setting up the Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} `);
});
