// movies.js

const popularMovies = [
  {
    title: "Extraction 2",
    img: "Stranger_Things_Cast.jpg",
    year: "2023",
    rating: "R",
    genres: ["Action", "Thriller"]
  },
  {
    title: "Red Notice",
    img: "tvimg.jpg",
    year: "2021",
    rating: "PG-13",
    genres: ["Action", "Comedy"]
  },
  {
    title: "The Gray Man",
    img: "grayman.jpg",
    year: "2022",
    rating: "PG-13",
    genres: ["Action", "Spy"]
  },
  {
    title: "Bird Box",
    img: "birdbox.jpg",
    year: "2018",
    rating: "R",
    genres: ["Horror", "Thriller"]
  }
];

const actionMovies = [
  {
    title: "John Wick",
    img: "1.jpg",
    year: "2014",
    rating: "R",
    genres: ["Action", "Crime"]
  },
  {
    title: "Mad Max: Fury Road",
    img: "3.jpg",
    year: "2015",
    rating: "R",
    genres: ["Action", "Adventure"]
  },
  {
    title: "Gladiator",
    img: "4.jpg",
    year: "2000",
    rating: "R",
    genres: ["Action", "Drama"]
  },
  {
    title: "The Dark Knight",
    img: "breakingbad.jpg",
    year: "2008",
    rating: "PG-13",
    genres: ["Action", "Drama"]
  }
];

const topRatedMovies = [
  {
    title: "The Shawshank Redemption",
    img: "witcher.jpg",
    year: "1994",
    rating: "R",
    genres: ["Drama", "Crime"]
  },
  {
    title: "The Godfather",
    img: "park.jpg",
    year: "1972",
    rating: "R",
    genres: ["Crime", "Drama"]
  },
  {
    title: "Pulp Fiction",
    img: "river.jpg",
    year: "1994",
    rating: "R",
    genres: ["Crime", "Drama"]
  },
  {
    title: "Forrest Gump",
    img: "office.jpg",
    year: "1994",
    rating: "PG-13",
    genres: ["Drama", "Romance"]
  }
];

function renderMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";  // Clear previous content to avoid duplication
  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("content-item");
    movieDiv.innerHTML = `
      <img 
        src="${movie.img}" 
        alt="${movie.title}" 
        style="width: 180px; height: 270px; object-fit: cover; border-radius: 6px;"
      />
      <p class="content-title">${movie.title}</p>
      <div class="badge-row">
        <span class="badge">${movie.year}</span>
        <span class="badge">${movie.rating}</span>
        ${movie.genres.map(g => `<span class="badge">${g}</span>`).join("")}
      </div>
    `;
    container.appendChild(movieDiv);
  });
}
renderMovies(popularMovies, "popular-movies");
renderMovies(actionMovies, "action-movies");
renderMovies(topRatedMovies, "top-rated-movies");

