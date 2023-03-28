// lista de nomes a serem sorteados
var nomes = [];

// lista de nomes já sorteados
var sorteados = [];

var descartados = [];




// função para adicionar uma lista de nomes à lista
function adicionarNomes() {
  var nomesInput = document.getElementById("nomes");
  var nomesTexto = nomesInput.value.trim();
  if (nomesTexto !== "") {
    var novosNomes = nomesTexto.split("\n");
    for (var i = 0; i < novosNomes.length; i++) {
      var nome = novosNomes[i].trim();
      if (nome !== "") {
        nomes.push(nome);
      }
    }
    nomesInput.value = "";
    exibirLista();

  }
} W


// função para exibir a lista de nomes
function exibirLista() {
  var lista = document.getElementById("lista-nomes");
  lista.innerHTML = "";
  for (var i = 0; i < nomes.length; i++) {
    var li = document.createElement("li");
    li.textContent = nomes[i];
    lista.appendChild(li);
  }
}


// função para sortear um nome aleatório da lista
function sortear() {
  if (nomes.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  // gerar um número aleatório entre 0 e o comprimento da lista de nomes
  var indiceSorteado = Math.floor(Math.random() * nomes.length);

  // obter o nome sorteado
  var nomeSorteado = nomes[indiceSorteado];

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p><strong>Nome sorteado:</strong> " + nomeSorteado + "</p>";

  // remover o nome sorteado da lista de nomes e adicioná-lo à lista de nomes sorteados
  if (confirm(nomeSorteado)) {
    nomes.splice(indiceSorteado, 1)

    sorteados.push(nomeSorteado);

    // exibir o nome sorteado e a lista de nomes sorteados

  } else {
    nomes.splice(indiceSorteado, 1)
  };

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p><strong>Nome sorteado:</strong> " + nomeSorteado + "</p>";

  exibirSorteados();
  exibirLista();
}

// função para exibir a lista de nomes sorteados
function exibirSorteados() {
  var sorteadosLista = document.getElementById("sorteados");
  sorteadosLista.innerHTML = "";

  if (sorteados.length > 0) {
    var lista = document.createElement("ul");
    for (var i = 0; i < sorteados.length; i++) {
      var item = document.createElement("li");
      item.textContent = sorteados[i];
      lista.appendChild(item);
    }
    sorteadosLista.appendChild(lista);
  } else {
    sorteadosLista.innerHTML = "<p>Nenhum nome sorteado ainda.</p>";
  }
}
