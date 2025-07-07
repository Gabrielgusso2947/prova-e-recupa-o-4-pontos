
function ADICIONAR() {

let mostraHTML = document.getElementById("mostraHTML");
let times = prompt("Escreva o nome do seu time");
let limiteTimes = 4;
alert("Escreva qual o nome dos jogadores.");


let jogador1 = prompt("Escreva o nome do primeiro jogador").toLowerCase();
let idade1 = Number(window.prompt("Digite sua idade"));
let jogador2 = prompt("Escreva o nome do segundo jogador").toLowerCase();
let idade2 = Number(window.prompt("Digite sua idade"));
let jogador3 = prompt("Escreva o nome do terceiro jogador").toLowerCase();
let idade3 = Number(window.prompt("Digite sua idade"));



let idade_media = (idade1 + idade2 + idade3) / 3;

let num = parseInt(idade_media);


if(idade_media > 15)  {
    alert("O jogador ultrapassOU o limite de idade.");
    alert("Tente novamente com um time válido!");
    mostraHTML.innerHTML = `<p>Coloque outro jogador para conseguir participar.</p>`
}

if(times === limiteTimes) {
    alert("Infelizmente as inscrições já se encerraram.");
}else{
  
}


mostraHTML.innerHTML += `<P><b>TIME: ${times}, MÉDIA DO TIME: ${num}</b></P>`

mostraHTML.innerHTML += `<p>primeiro jogador: ${jogador1}, idade:${idade1}</p>`

mostraHTML.innerHTML += `<p>segundo jogador: ${jogador2}, idade:${idade2}</p>`

mostraHTML.innerHTML += `<p>perceiro jogador: ${jogador3}, idade:${idade3}</p>`







 
}
