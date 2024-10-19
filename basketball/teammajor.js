document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
  });
        function displayPlayers(teamIndex) {
          const container = document.getElementById('team-container');
          container.innerHTML = ''; // Vider le contenu précédent

          player[teamIndex].forEach((player) => {
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

        // Appel initial pour afficher l'équipe de France (index 0)
        displayPlayers(0);
     