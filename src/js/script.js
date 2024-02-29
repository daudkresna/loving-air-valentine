var btnYes = document.getElementById("btnYes");
var btnNo = document.getElementById("btnNo");

const noText = [
  "Ayo Dong",
  "Jangan Ditolak",
  "Jahat BGT",
  "SEBELL",
  "Pencet Ijo Aja",
  "Nangis Nih Akuuuu",
  "Bener Bener Yaa",
  "Pencet Ijo Astagaa"
];
var i = 0;
function clickNo() {
  if (i > noText.length-1) {
    i = 0;
    btnNo.innerHTML = noText[i];
  } else {
    btnNo.innerHTML = noText[i];
  }
  i++
}

function clickYes(){
    const yesDiv = document.getElementById('yesDiv');
    const hero = document.getElementById('hero');
    hero.classList.add('hidden')
    yesDiv.classList.remove('hidden')
}
