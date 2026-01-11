/*const animes = [
    { title: "Jujutsu Kaisen", image: "assets/images/jujutsu.jpg" },
    { title: "Demon Slayer", image: "assets/images/demonslayer.jpg" },
    { title: "Death Note", image: "assets/images/deathnote.jpg" },
    { title: "Dragon Ball Z", image: "assets/images/Dragon Ball Z.jpg" },
    { title: "Bleach", image: "assets/images/Bleach.jpg" },
    { title: "Black Clover", image: "assets/images/Black Clover.jpg" },
    { title: "My Hero Academia", image: "assets/images/My Hero Academia.jpg" },
    { title: "Fullmetal Alchemist: Brotherhood", image: "assets/images/Fullmetal Alchemist Brotherhood.jpg" },
    { title: "Hunter x Hunter", image: "assets/images/Hunter x Hunter.jpg" },
    { title: "Fairy Tail", image: "assets/images/Fairy Tail.jpg" },
    { title: "Dragon Ball Super", image: "assets/images/Dragon_Ball_Super.jpg" }
];
 */


const grid = document.getElementById("animeGrid");

if (grid && typeof animes !== "undefined") {
  animes.forEach(anime => {
    const card = document.createElement("a");
    card.href = `anime.html?anime=${anime.slug}`;
    card.className = "anime-card";

    card.innerHTML = `
      <img src="${anime.cover}" alt="Capa do anime ${anime.title}" loading="lazy">
      <h3>${anime.title}</h3>
    `;

    grid.appendChild(card);
  });
}

card.addEventListener("click", () => {
  window.location.href = `anime.html?anime=${anime.slug}`;
});
