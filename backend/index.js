import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/schema.js";
import { resolvers } from "./src/resolver/resolver.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';


// Setting up the Apollo server with JWT authentication in context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    try {
      const user = jwt.verify(token, JWT_SECRET);
      return { user };
    } catch (error) {
      return {};
    }
  },
});

// Start the server
const PORT = 4000;
server.listen(PORT).then(({ url }) => {
  console.log(
    `Your Apollo Server with JWT authentication is running at ${url}`
  );
});
