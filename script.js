window.addEventListener("click", () => {
  document.getElementById("bgm").play();
},{ once:true });

function normalize(txt){
  return txt
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}

function checkAnswer(){
  const input = normalize(document.getElementById("answer").value);
  const solution = "EVGWALIDMAIPARIS";

  if(input === solution){
    document.getElementById("successSound").play();
    document.body.innerHTML = `
      <div class="game-container">
        <h1>MISSION COMPLETE</h1>
        <p>
          Félicitations.<br><br>
          Prépare tes billets de train pour le <b>vendredi 29 mai</b><br>
          Retour le <b>lundi 01 juin</b> à Paris.
        </p>
      </div>
    `;
  } else {
    document.getElementById("game").innerHTML = `
      <h1 class="gameover">GAME OVER</h1>
      <p>RESTART ?</p>
      <button onclick="location.reload()">▶ CONTINUER</button>
    `;
  }
}
