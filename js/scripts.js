const produtos = [
    {id: 1, nome:"Teclado Gamer", categoria: "Periféricos", preco: 120.00},
    {id: 2, nome:"Mouse sem fio", categoria: "Periféricos", preco: 89.90},
    {id: 3, nome:"Monitor 24 Polegadas", categoria: "Monitores", preco: 799.90},
    {id: 4, nome:"Headset USB", categoria: "Áudio", preco: 149.90},
    {id: 5, nome:"Notebook", categoria: "Computadores", preco: 3299.90},
    {id: 6, nome:"Webcam HD", categoria: "Acessórios", preco: 199.90},
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordencao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos(){

    //pega o valor digitado na busca e converte para minúsculo 
    let textoBusca = campoBusca.value.toLowerCase();


    //Percorre a lista de produtos e valida se existe o nome buscado dentro da lista de produtos.
    //include -> valida se existe o texto buscado dentro da lista de produtos 
    let produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(textoBusca));
}