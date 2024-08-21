function Lyrics() {
    const msg = "Amazing skills";
    const weather = "sunny";

    const weather1 = "rainy";

    const printIcon = (name) => {
        const weatherMap = {
            sunny: "☀️",
            cloudy: "☁️",
            rainy: "🌧️",
            stormy: "🌩️"
          }
        
          return weatherMap[name]
        }

    return (
<div>
    <p>{msg.toUpperCase()}</p>
    <p>{weather === "sunny" ? "☀️" : "☁️"}</p>
    <p>{printIcon(weather1)}</p>
</div>
    );
}

export default Lyrics;

/*
Comme nous l'avons dit dans la quête précédente, JSX te permet de mettre du balisage dans du JavaScript. Dans ce balisage, les accolades te permettent de "revenir" en JavaScript afin d'intégrer une variable de ton code et l'afficher.
On peut également y exécuter du JavaScript avec toUpperCase
*/