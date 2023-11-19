const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weather {
    city: String!
    description: String!
    temperature: Int!
    humidity: Int
  }

  type Movie {
    title: String
    releaseYear: Int
    genre: String
    director: String
    actors: [String]
    plotSummary: String
  }

  type Query {
    getWeatherByCity(city: String!): Weather
    getWeathers: [Weather]!
    getMovieByName(movieName: String!): Movie
    getMovies: [Movie]!
  }
`;

module.exports = typeDefs;
