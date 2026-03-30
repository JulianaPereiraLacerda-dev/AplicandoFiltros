const produtos = [
    {id: 1, nome:"Teclado Gamer", categoria: "Periféricos", preco: 120.00},
    {id: 2, nome:"Mouse sem fio", categoria: "Periféricos", preco: 89.90},
    {id: 3, nome:"Monitor 24 Polegadas", categoria: "Monitores", preco: 799.90},
    {id: 4, nome:"Headset USB", categoria: "Áudio", preco: 149.90},
    {id: 5, nome:"Notebook", categoria: "Computadores", preco: 3299.90},
    {id: 6, nome:"Webcam HD", categoria: "Acessórios", preco: 199.90},
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("lista-produtos");

function mostrarProdutos(){

    //pega o valor digitado na busca e converte para minúsculo 
    let textoBusca = campoBusca.value.toLowerCase();


    //Percorre a lista de produtos e valida se existe o nome buscado dentro da lista de produtos.
    //include -> valida se existe o texto buscado dentro da lista de produtos 
    let produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(textoBusca));

    //Filtro de ordenação (select)

    //Verifica se a opção selecionada é "Nome A-Z"----------------------------------------------------------------
    if(ordenacao.value === "nome-az"){
        produtosFiltrados.sort((a, b) => {

            //localeCompare retorna:
            //negativo -> A vem antes
            //positivo -> B vem antes
            //0 -> são iguais
            return a.nome.localeCompare(b.nome);
        })
    }

    //Verifica se a opção é "nome-za"---------------------------------------------------------------------------------
    if(ordenacao.value === "nome-za"){
        produtosFiltrados.sort((a, b) => {
            return b.nome.localeCompare(a.nome);
        })
    }

    // Verifica se "menor preço"-------------------------------------------------------------------------------------
    if(ordenacao.value === "preco-menor"){
        produtosFiltrados.sort((a, b) => {
            // Subtrai os valores e se der negativo -> a vem antes do b
            // Subtrai os valores e se der positivo  -> b vem antes do a
            return a.preco - b.preco;
        })
    }

    //Verifica se é "maior preço"---------------------------------------------------------------------------------
    if(ordenacao.value === "preco-maior"){
        produtosFiltrados.sort((a, b) => {

            //inverte a subtração 
            return b.preco - a.preco;
        })
    }



    //Limpar a tela 
    listaProdutos.innerHTML = "";


    //Se não encontrar nenhum produto
    if(produtosFiltrados.length === 0){
        listaProdutos.innerHTML = "<p class='mensagem'>Nenhum produto encontrado.</p>"
        return;
    }

    //cria o card de produto para cada produto
    for(let i = 0; i < produtosFiltrados.length; i++){
        let produto = produtosFiltrados[i];

        listaProdutos.innerHTML += 
            "<div class='card'>" +
                 "<h2>" +produto.nome + "</h2>" +
                 "<p class='cat'> Categoria:"+produto.categoria + "</p>" +
                 "<p class='preco'> R$" +produto.preco.toFixed(2).replace(".", ",") + "<p>" 
            " </div>";
    }

}

//iniciando na tela, chamando a função de mostrar produtos
campoBusca.addEventListener("input", () => {
    mostrarProdutos();
})
ordenacao.addEventListener("change", () =>{
    mostrarProdutos();
})
mostrarProdutos();