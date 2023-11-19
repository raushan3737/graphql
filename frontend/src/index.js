const graphqlServerUrl = "http://localhost:4000/graphql";

const weatherQuery = `
    query {
      getWeathers {
        city
        description
        temperature
        humidity
      }
    }
  `;

const movieQuery = `
    query {
      getMovies {
        title
        releaseYear
        genre
        director
        actors
        plotSummary
      }
    }
  `;

const fetchDataAndRender = (query, renderFunction) => {
  fetch(graphqlServerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      const items = data.data[Object.keys(data.data)[0]];

      const itemsTableHTML = `<table class="styled-table">
            <thead>
              <tr>
                ${Object.keys(items[0])
                  .map((key) => `<th>${key.toLocaleUpperCase()}</th>`)
                  .join("")}
              </tr>
            </thead>
            <tbody>
              ${items
                .map(
                  (item) =>
                    `<tr>${Object.values(item)
                      .map((value) => `<td>${value}</td>`)
                      .join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>`;

      renderFunction(itemsTableHTML);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const weatherTableElement = document.getElementById("weatherTable");
  const movieTableElement = document.getElementById("movieTable");

  fetchDataAndRender(weatherQuery, (html) => {
    weatherTableElement.innerHTML = html;
  });

  fetchDataAndRender(movieQuery, (html) => {
    movieTableElement.innerHTML = html;
  });
});
