# GraphQL: 
- To run the graphql, we have to import the apollo-server & there we have to pass the typeDefs & resolvers in order to detect the type of schema, query & the resolvers


- Default value for the field: 
  age: Int = 18 : If age is required but not passed, then it will take the by-default value

   input CreateUserInput {
     name: String!
     username: String!
     age: Int = 18
     nationality: Nationality!
   }

- Query: 

Ex: 
query getAllUsers {
  users {
    id
    name
    username
    nationality
  }
}



- Mutation: 

Ex: 
mutation updateUserName ($input: UpdateUserNameInput!) { 
  updateUserName(input: $input) {
    name
    username
  }
}


- Note: Mutation changes will be reflected only in apollo-server ide not in the local.

- References: 
1. https://github.com/machadop1407/graphql-full-course
2. https://github.com/iamshaunjp/graphql-crash-course
3. (GraphQL playground): https://github.com/machadop1407/graphql-full-course 
4. https://www.apollographql.com/docs/apollo-server/schema/custom-scalars
5. https://www.apollographql.com/docs/react/data/fragments
6. https://blog.logrocket.com/graphql-fragments-explained
7. https://www.apollographql.com/tutorials/fullstack-quickstart/04-writing-query-resolvers
8. https://www.apollographql.com/docs/