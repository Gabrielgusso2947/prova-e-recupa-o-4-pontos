let contador = 0; 
let limiteTimes = 4;

function ADICIONAR() {
  

    let mostraHTML = document.getElementById("mostraHTML");
    let times = prompt("Escreva o nome do seu time");
    alert("Escreva qual o nome dos jogadores.");

    let jogador1 = prompt("Escreva o nome do primeiro jogador").toLowerCase();
    let idade1 = Number(prompt("Digite sua idade"));

    let jogador2 = prompt("Escreva o nome do segundo jogador").toLowerCase();
    let idade2 = Number(prompt("Digite sua idade"));

    let jogador3 = prompt("Escreva o nome do terceiro jogador").toLowerCase();
    let idade3 = Number(prompt("Digite sua idade"));




    let idade_media = (idade1 + idade2 + idade3) / 3;
    let num = parseInt(idade_media);



    if (idade_media > 15) {
        alert("O jogador ultrapassou o limite de idade.");
        alert("Tente novamente com um time válido!");
        mostraHTML.innerHTML += `<p><b>Os jogadores ultrapassam a média do limite de idade. Tente com outros jogadores.</b></p>`;
        return;
    }


    
    mostraHTML.innerHTML += `<p><b>TIME: ${times}, MÉDIA DE IDADE DO TIME: ${num}</b></p>`;

    mostraHTML.innerHTML += `<p>Primeiro jogador: ${jogador1},   idade: ${idade1}</p>`;

    mostraHTML.innerHTML += `<p>Segundo jogador: ${jogador2},   idade: ${idade2}</p>`;

    mostraHTML.innerHTML += `<p>Terceiro jogador: ${jogador3},   idade: ${idade3}</p>`;
    contador++;

    if (contador === limiteTimes) {
        alert("Essa foi a ultima inscrição do interclasse.") 
        alert("As inscrições foram encerradas.")  

        mostraHTML.innerHTML += `<p>as inscrições foram encerradas.</p>`.toLowerCase();

    }

  
}