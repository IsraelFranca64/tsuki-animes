function initPlayer() {
  const params = new URLSearchParams(window.location.search);
  const animeSlug = params.get("anime");
  const epNumber = parseInt(params.get("ep"));

  const anime = animes.find(a => a.slug === animeSlug);

  if (!anime) {
    alert("Anime não encontrado");
    return;
  }

  const episode = anime.episodes.find(e => e.number === epNumber);

  if (!episode) {
    alert("Episódio não encontrado");
    return;
  }

  /* ==========================
     BANNER
  ========================== */
  const banner = document.getElementById("animeBanner");
  if (banner) {
    banner.style.backgroundImage = `url(${anime.cover})`;
  }

  /* ==========================
     ELEMENTOS
  ========================== */
  const videoPlayer = document.getElementById("videoPlayer");
  const playerTitle = document.getElementById("player-title");
  const episodeList = document.getElementById("episode-list");
  const nextBtn = document.getElementById("nextEpisodeBtn");

  /* ==========================
     CONTEÚDO
  ========================== */
  playerTitle.textContent = `${anime.title} — Episódio ${episode.number}`;

  videoPlayer.src = episode.video;
  videoPlayer.load(); // 🔑 ESSENCIAL (corrige áudio e carregamento)

  /* ==========================
     LISTA DE EPISÓDIOS
  ========================== */
  episodeList.innerHTML = "";

  anime.episodes.forEach(ep => {
    const li = document.createElement("li");
    li.textContent = `Episódio ${ep.number}`;

    if (ep.number === episode.number) {
      li.classList.add("active");
    }

    li.onclick = () => {
      window.location.href = `player.html?anime=${anime.slug}&ep=${ep.number}`;
    };

    episodeList.appendChild(li);
  });

  /* ==========================
     PRÓXIMO EPISÓDIO
  ========================== */
  const nextEpisode = anime.episodes.find(
    e => e.number === episode.number + 1
  );

  if (nextEpisode && nextBtn) {
    nextBtn.onclick = () => {
      window.location.href = `player.html?anime=${anime.slug}&ep=${nextEpisode.number}`;
    };

    videoPlayer.addEventListener("ended", () => {
      window.location.href = `player.html?anime=${anime.slug}&ep=${nextEpisode.number}`;
    });
  } else if (nextBtn) {
    nextBtn.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", initPlayer);
