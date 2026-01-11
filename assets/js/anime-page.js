document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("anime");

  const anime = animes.find(a => a.slug === slug);

  if (!anime) {
    console.error("Anime não encontrado");
    return;
  }

  console.log("Anime carregado:", anime);

  // ELEMENTOS
  const title = document.getElementById("animeTitle");
  const cover = document.getElementById("animeCover");
  const description = document.getElementById("animeDescription");
  const banner = document.getElementById("animeBanner");
  const episodeList = document.getElementById("episode-list");

  // CONTEÚDO PRINCIPAL
  title.textContent = anime.title;
  description.textContent = anime.description;
  cover.src = anime.cover;
  cover.alt = `Capa do anime ${anime.title}`;

  // BANNER
  if (banner) {
    banner.style.backgroundImage = `url(${anime.cover})`;
  }

  // LISTA DE EPISÓDIOS
  anime.episodes.forEach(ep => {
    const li = document.createElement("li");
    li.textContent = `Episódio ${ep.number}`;

    li.onclick = () => {
      window.location.href = `player.html?anime=${anime.slug}&ep=${ep.number}`;
    };

    episodeList.appendChild(li);
  });
});
