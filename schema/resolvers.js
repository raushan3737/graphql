const { UserList, MovieList } = require("../mockData");
const _ = require("lodash");

// Resolver: Place where we all have the resolver(implementation) for each Query present in typedef gql``

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      // We have to typecast the value to the number because, in resolvers id is coming as string, no matter what you're passing from apollo-server IDE
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  // If we have field in type which does not return the basic type we can create resolvers for that.... like below
  // It is not neccessary to have all the data in one place like in user table, for that we can have the id in user to refer that by querying the DB.
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUserName: (parent, args) => {
      // Every property will be in the form of string by default
      const { id, newUserName } = args.input;
      let updatedUser = null;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUserName;
          updatedUser = user;
        }
      });
      return updatedUser;
    },

    deleteUser: (parent, args) => {
      const { id } = args;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
