# GraphQL: 


- Context: 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req , res }) => {
    return { req , res };
  },
});

Here, context can be useful to authentication or authorization & it will be accessible to all resolvers by-default. 

const resolvers = {
  Query: {
    // USER RESOLVERS
    user: (parent, args, context, info) => {
        console.log(context); // context.res.headars
        console.log(info);
        const id = args.id;
        const user = _.find(UserList, { id: Number(id) });
        return user;
     },
    }
}

In the context, we can get the request,response that is made during execution of resolvers.



- refetch(): Function to call whenever we do any mutation to update the data automatically with reloading the browser. 



- Example of query in Apollo-server : 
mutation createUser($input: CreateUserInput!){
  createUser(input: $input) {
     name
     nationality
     age
  }
}

mutation updateUserName ($input: UpdateUserNameInput!) {
  updateUserName(input: $input) {
    name
    username
  }
}

mutation deleteUserById($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
  }
}

query getAllUsers {
  users {
    id
    name
    username
    nationality
  }
}


- Fragment: 

query getAllUsers {
  users {
    ...getAgeAndName
  }
}

fragment getAgeAndName on User {
  name
  nationality
}



If the resolver return the schema then, Query: 

 type Query {
    users: UsersResult
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

<!-- In the apollo-server -->

query getAllUsers {
  users {
    ... on UsersSuccessResult {
      users {
        name
        nationality
      }
    }
    ...on UsersErrorResult {
      message
    }
  }
}

Refer the type-defs and resolvers for more. 

