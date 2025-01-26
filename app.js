const nomes = [];

function adicionarAmigo() {
    const inputNome = document.querySelector("input");
    const nomeAdicionado = inputNome.value.trim();
    const listaDosNomes = document.getElementById("listaAmigos");

    if (nomeAdicionado) {
        nomes.push(nomeAdicionado);
        atualizarLista(listaDosNomes);
        inputNome.value = '';
    } else {
        alert("Por favor, insira um nome válido!");
    }
}

function atualizarLista(listaDosNomes) {
    listaDosNomes.innerHTML = nomes.map(nome => `<li>${nome}</li>`).join('');
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const nomeEscolhido = nomes[Math.floor(Math.random() * nomes.length)];
    const sortear = document.getElementById("resultado");
    sortear.innerHTML = nomeEscolhido;
}