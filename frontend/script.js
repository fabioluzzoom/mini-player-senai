const API_URL = "/mini-player";

// Carrega apenas a lista de músicas com botões
async function loadMusicas() {
  try {
    const res = await fetch(`${API_URL}/playlist`);
    const data = await res.json();

    const musicList = document.getElementById("music-list");
    musicList.innerHTML = "";

    data.forEach((musica) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${musica.titulo}</p>
        <button onclick="playMusic(${musica.id})">Ouvir</button>
      `;
      musicList.appendChild(div);
    });
  } catch (error) {
    console.error("Erro ao carregar músicas:", error);
  }
}

// Carrega apenas o ranking
async function loadRanking() {
  try {
    const res = await fetch(`${API_URL}/ranking`);
    const data = await res.json();

    const tbody = document.querySelector("#ranking-table tbody");
    tbody.innerHTML = "";

    data.forEach((musica, idx) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>${musica.titulo}</td>
        <td>${musica.plays}</td>
      `;

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar ranking:", error);
  }
}


// Registra play e atualiza apenas o ranking
async function playMusic(id) {
  try {
    await fetch(`${API_URL}/play`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ musica_id: id }),
    });
    loadRanking(); // Atualiza só o ranking
  } catch (error) {
    console.error("Erro ao registrar play:", error);
  }
}

// Inicializa apenas a lista de músicas e o ranking
loadMusicas();
loadRanking();