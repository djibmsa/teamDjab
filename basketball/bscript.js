function displayPlayersByPosition(position) {
  const filteredPlayers = player.flat().filter(p => p.type === position);
  const container = document.getElementById('team-container');
  container.innerHTML = ''; // Vider le contenu précédent

  filteredPlayers.forEach((player) => {
    const playerCard = `
      <div class="player-card">
        <img src="${player.img}" alt="${player.name}" />
        <h2>${player.name}</h2>
        <h3>${player.team}</h3>
        <p>Position: ${player.type}</p>
        <p>Description: ${player.desc}</p>
      </div>
    `;
    container.innerHTML += playerCard;
  });
}

// Affiche uniquement les pivots
displayPlayersByPosition('Pivot');

