var detalheProdutos = document.getElementById("detalhe-produtos-bg");
var detalhe = document.getElementById("detalhe-produtos")
var produtosLista = document.getElementById('produtos-lista')
var linkWhatsapp = 'https://wa.me/5534997743681?text=Tenho interesse em comprar este produto: '
console.log(produtosLista)

var body = document.getElementById("body")
var listaDeItens = [
  {
    nome: "Gabinete Gamer Diamond StormPro",
    detalhes: "O Redragon Diamond Storm RGB é a escolha perfeita pra quem quer o melhor design, recursos e qualidade aliados a uma construção robusta e um belo sistema de iluminação RGB para um estilo único em seu setup: O Diamond Storm é a mais completa e impressionante escolha para Gamers que fazem a diferença em cada partida",
    avaliacao: 4.5,
    valor: 420,
    img: 'img/gabnete-gamer.webp'
  },
  {
    nome: "Water Cooler ARGB Para Computador PcYes Gamer 2 Fans 250wr",
    detalhes: "Utilizado simultaneamente para refrigerar o processador, partes da placa-mãe como os chipsets e reguladores de tensão, além de memórias e partes da placa de vídeo como a GPU (processador gráfico), permitindo assim um melhor desempenho dos componentes.",
    avaliacao: 4.2,
    valor: 580,
    img: 'img/whater-cooler.webp'

  },
  {
    nome: "Teclado Mecânico Gamer T-Dagger Bora, RGB, Switch Outemu Brown, PT, Preto - T-TGK315-BROWN",
    detalhes: "O T-Dagger Bora RGB traz tudo que um teclado mecânico deve ter: um RGB encantador, Switches de confiança, teclas que não desgastam e um prazer de uso absoluto! Inclui iluminação RGB individual por tecla que pode ser customizada tanto diretamente no teclado ou pelo software. O design elegante com as teclas flutuantes trazem estilo ao Bora sem comprometer a estética minimalista. O Bora também é de fácil transporte devido ao seu cabo removível.",
    avaliacao: 3.5,
    valor: 250,
    img: 'img/teclado.webp'
  },
  {
    nome: "Placa de Vídeo RTX 3060 Asus Dual O12G V2 NVIDIA GeForce, 12GB GDDR6, LHR, DLSS, Ray Tracing - DUAL-RTX3060-O12G-V2",
    detalhes: "Tenha um desempenho para seu trabalho e gameplay com a Placa de Vídeo Asus NVIDIA GeForce DUAL RTX 3060 O12G V2 é equipada com uma memória de 12GB GDDR6, Velocidade de Memória de 15 Gbps, e Boost Clock de 1867 MHz em OC e de 1867 MHz no modo Jogo.",
    avaliacao: 5,
    valor: 1990,
    img: 'img/placa-de-Video.webp',
  },
]

listaDeItens.forEach(produto => {
  var liProduto = document.createElement("li");
  liProduto.innerHTML = `<li class="loja-item"> <img src='${produto.img}' alt="cooler-gamer">
  <div class="loja-texto">
      <h2>${produto.nome}</h2>
      <span class="avaliacao">
          ${'⭐'.repeat(produto.avaliacao)}
          <p>${produto.avaliacao}</p>
      </span>
      <div class="valor">
          <span id="valor">
              R$ ${produto.valor}
          </span>
          <a href="javascript:openDetalhes('${produto.nome}', '${produto.detalhes}', '${produto.avaliacao}')">COMPRAR</a>
      </div>
  </div>
</li>`;
  produtosLista.appendChild(liProduto)
})

function openDetalhes(nome, detalhes, avaliacao) {
  detalhe.innerHTML = `<h2>${nome}</h2>
  <div class="detalhe-img">

      <span class="avaliacaoFrame" id="frameAvaliacao">${'⭐'.repeat(avaliacao)}</span>
  </div>

  <p class="descricao">${detalhes}</p>
  <h3>
  </h3>
  <a class="aFrame" href="${linkWhatsapp +nome}">COMPRAR</a>
`
  detalheProdutos.style.display = 'flex'
  body.style.overflowY = "hidden";
}

function closeDetalhes() {
  detalheProdutos.style.display = 'none'
  body.style.overflowY = "scroll";
}


detalheProdutos.addEventListener("click", function (event) {
  if (event.srcElement.id == "detalhe-produtos-bg") {
    closeDetalhes()
  }
})







