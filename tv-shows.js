const popularTVShows = [
  {
    title: "Stranger Things",
    img: "Stranger_Things_Cast.jpg",
    year: 2016,
    rating: "TV-14",
    genres: ["Drama", "Fantasy", "Horror"],
  },
  {
    title: "The Witcher",
    img: "witcher.jpg",
    year: 2019,
    rating: "TV-MA",
    genres: ["Action", "Fantasy", "Drama"],
  },
  {
    title: "Breaking Bad",
    img: "breakingbad.jpg",
    year: 2008,
    rating: "TV-MA",
    genres: ["Crime", "Drama", "Thriller"],
  },
];

const comedyTVShows = [
  {
    title: "The Office",
    img: "office.jpg",
    year: 2005,
    rating: "TV-14",
    genres: ["Comedy"],
  },
  {
    title: "Brooklyn Nine-Nine",
    img: "river.jpg",
    year: 2013,
    rating: "TV-14",
    genres: ["Comedy", "Crime"],
  },
  {
    title: "Parks and Recreation",
    img: "park.jpg",
    year: 2009,
    rating: "TV-14",
    genres: ["Comedy"],
  },
];

function createCard(show) {
  const card = document.createElement("div");
  card.className = "content-card";
  card.innerHTML = `
      <img src="${show.img}" alt="${show.title}" />
      <div class="card-overlay">
        <div class="overlay-top">
          <div class="netflix-badge">TV</div>
        </div>
        <div class="overlay-bottom">
          <div class="overlay-title">${show.title}</div>
          <div class="overlay-info">
            <div class="info-badge">${show.year}</div>
            <div class="info-badge">${show.rating}</div>
            ${show.genres
              .map((g) => `<div class="info-badge">${g}</div>`)
              .join("")}
          </div>
          <div class="overlay-controls">
            <button class="control-btn play-btn" title="Play"></button>
            <button class="control-btn thumbs-btn" title="Like"></button>
            <button class="control-btn more-btn" title="More Info"></button>
          </div>
        </div>
      </div>
    `;
  return card;
}

function renderShows(containerId, shows) {
  const container = document.getElementById(containerId);
  shows.forEach((show) => {
    container.appendChild(createCard(show));
  });
}

renderShows("popular-tv-shows", popularTVShows);
renderShows("comedy-tv-shows", comedyTVShows);
