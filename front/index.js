
async function chamadaAPI() {

    var pacote = document.getElementsByName('Pacote');

    var resposta = "";

    for (var i = 0; i < pacote.length; i++) {
        if (pacote[i].checked) {
            if (pacote[i].value == "Pacote i") {
                resposta = "1";

            } else if (pacote[i].value == "Pacote ii") {
                resposta = "2";

            } else if (pacote[i].value == "Pacote iii") {
                resposta = "3";

            } else if (pacote[i].value == "Pacote iiii") {
                resposta = "4";

            } else if (pacote[i].value == "Pacote iiiii") {
                resposta = "5";

            } else if (pacote[i].value == "Pacote iiiiii") {
                resposta = "6";

            }
        }
    }
    const personagens = await axios.get(`http://localhost:3001/starwars/personagens/filmes/${resposta}`);

    const arrayPersonagens = personagens.data.nomes_personagens;

    let personagem = document.querySelector(".teste");

    for (let i = 0; i < arrayPersonagens.length; i++) {
        let teste1 = document.createElement("li");
        teste1.textContent = arrayPersonagens[i];
        personagem.appendChild(teste1);
    }
}


async function chamadaAPI2() {

    var pacote2 = document.getElementsByName('Pacote2');

    var resposta = "";

    for (var i = 0; i < pacote2.length; i++) {
        if (pacote2[i].checked) {
            if (pacote2[i].value == "Pacote 1") {
                resposta = "1";

            } else if (pacote2[i].value == "Pacote 2") {
                resposta = "2";

            } else if (pacote2[i].value == "Pacote 3") {
                resposta = "3";

            } else if (pacote2[i].value == "Pacote 4") {
                resposta = "4";

            } else if (pacote2[i].value == "Pacote 5") {
                resposta = "5";

            } else if (pacote2[i].value == "Pacote 6") {
                resposta = "6";

            }
        }
    }
    const naves = await axios.get(`http://localhost:3001/starwars/naves/filmes/${resposta}`);

    const arrayNaves = naves.data.nomes_naves;

    let nave = document.querySelector(".teste2");

    for (let i = 0; i < arrayNaves.length; i++) {
        let teste1 = document.createElement("li");
        teste1.textContent = arrayNaves[i];
        nave.appendChild(teste1);
    }
}

