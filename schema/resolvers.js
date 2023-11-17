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
};

module.exports = { resolvers };
