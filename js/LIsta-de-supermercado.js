var items = [];

document.querySelector("input[type=submit]")
.addEventListener("click",() => {    
    var nomeProduto = document.querySelector('input[name=nome_produto]')
    var precoProduto = document.querySelector("input[name=price]")

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    if (!nomeProduto.value || !precoProduto.value){
    alert("Por favor, escreva o nome do produto e o valor do produto!");   
    items = [];
    return false;
    }else{
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML="";
    items.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="prince-produto"><span>`+val.valor+`</span></h3>
        </div>
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value="";
    precoProduto.value="";

    let elementoSoma = document.querySelector(".soma-produto h1");
    elementoSoma.innerHTML = "Total: R$"+soma;
    }

});

    document.querySelector("button[name=limpar]")
    .addEventListener("click",() => {
    items = [];
    document.querySelector('.lista-produtos').innerHTML="";
    document.querySelector(".soma-produto h1").innerHTML="Total: R$0";
});

/*
if(nomeProduto.value=""){
     alert("Por favor escreva o nome do produto e o valor do produto!");   
    }else if(precoProduto.value=""){
     alert("Por favor escreva o nome do produto e o valor do produto!");   
     
        // alert(nomeProduto);
        // alert(precoProduto);

    }else{
        nomeProduto.value="";
        precoProduto.value="";
    }
*/

