let mostraHTML = document.getElementById("mostraHTML")
let numero = 0
let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0


mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques}</p>`;


function ADICIONAR() {
    let frase

    num_adiv = Number(window.prompt("COLOQUE O NOME DO SEU TIME"));
    alert("qual os integrantes do seu time?")
    num_adiv3 = Number(window.prompt("Primeiro integrante "));
    num_adiv4 = Number(window.prompt("segundo integrante"));
    num_adiv5 = Number(window.prompt("terceiro integrante"));
    

    
    resultado = num1 * num2;

    
    frase = mostraHTML.innerHTML += `<p> Seu time foi adicionado!</p>`
    


    if (num_adiv === numero) {
        alert("qual o nome do seu time" + resultado + "seu time foi adicionado!");
    }else {
        alert("Seu time foi adicionado" + resultado + " Com sucesso!");

        mostraHTML.innerHTML == `<p>SEU TIME: ${numero}!</p>`
    }   

    


}