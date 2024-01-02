import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/schema.js";
import { resolvers } from "./src/resolver/resolver.js";

// Setting up the Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} `);
});
