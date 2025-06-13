const newReleases = [
  { title: "Found", image: "found.jpeg" },
  { title: "true Love", image: "true.jpeg" },
  { title: "Red Notice", image: "rednotice.jpeg" },
];

const trendingNow = [
  { title: "The Gift", image: "gift.jpeg" },
  { title: "Blacklist", image: "blacklist.jpeg" },
  { title: "Baby", image: "baby.jpeg" },
];

const comingSoon = [
  { title: "Kingdom", image: "1.jpeg" },
  { title: "You", image: "2.jpeg" },
  { title: "The 100", image: "3.jpeg" },
];

// Utility function to render content rows
function renderContentRow(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "content-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <p>${item.title}</p>
    `;
    container.appendChild(div);
  });
}

renderContentRow(newReleases, "new-releases");
renderContentRow(trendingNow, "trending-now");
renderContentRow(comingSoon, "coming-soon");
