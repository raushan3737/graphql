const { weatherData, movieData } = require("../mockData/mockData");

const resolvers = {
  Query: {
    getWeatherByCity: (_, { city }) => {
      const weather = weatherData.find((data) => data.city === city);
      return weather || null;
    },
    getWeathers: () => weatherData,
    getMovieByName: (_, { movieName }) => {
      const movie = movieData.find((data) => data.title === movieName);
      return movie || null;
    },
    getMovies: () => movieData,
  },
};

module.exports = resolvers;
