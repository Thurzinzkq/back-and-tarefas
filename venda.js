//--Dados do Pedido--
let nomeCliente = "João Carlos";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 380.00;
let estoque = 15;
let quantidadePedido = 8;

//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;

if (!estoqueOK) {
    console.log("Pedido RECUSADO - estoque insuficiente")
}