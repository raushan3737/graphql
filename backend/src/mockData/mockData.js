// mockData.js
const weatherData = [
  {
    city: "Mumbai",
    description: "Partly Cloudy",
    temperature: 32,
    humidity: 80,
  },
  { city: "Delhi", description: "Hazy", temperature: 28, humidity: 75 },
  { city: "New York", description: "Sunny", temperature: 25, humidity: 70 },
  {
    city: "Los Angeles",
    description: "Clear skies",
    temperature: 30,
    humidity: 60,
  },
];

const movieData = [
  {
    title: "Dangal",
    releaseYear: 2016,
    genre: "Biography",
    director: "Nitesh Tiwari",
    actors: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"],
    plotSummary:
      "The story of a father who trains his daughters to become world-class wrestlers.",
  },
  {
    title: "Baahubali: The Beginning",
    releaseYear: 2015,
    genre: "Action",
    director: "S.S. Rajamouli",
    actors: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
    plotSummary:
      "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring people.",
  },
  {
    title: "Inception",
    releaseYear: 2010,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Elliot Page", "Joseph Gordon-Levitt"],
    plotSummary:
      "A thief who enters the dreams of others to steal their secrets.",
  },
  {
    title: "Titanic",
    releaseYear: 1997,
    genre: "Romance",
    director: "James Cameron",
    actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    plotSummary:
      "A love story set against the backdrop of the sinking of the Titanic.",
  },
];

module.exports = { weatherData, movieData };
