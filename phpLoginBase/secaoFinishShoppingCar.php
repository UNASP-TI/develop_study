<?php

include 'connect.php';

if(isset($_SESSION['id']) == false)
{
    include 'logout.php';
}

    $id_pessoa = $_SESSION['id'];

    $sqlInserirPedido="insert into pedido() value ()";
    mysqli_query($con, $sqlInserirPedido);
    
    $idPedido = mysqli_insert_id($con);


    foreach($_SESSION['cart'] as $key => $value){
        // echo $key." has the value ". $value['nomeProduto'] . " Quantity ". $value['quantity'] 
        $quantity = $value['quantity'];
        $sqlInserirPedidoProdutos="insert into pessoa_pedido_produto(fk_idPedido,fk_idPessoa,fk_idProduto,quantityProduto) value ('$idPedido','$id_pessoa','$key','$quantity')";
        mysqli_query($con, $sqlInserirPedidoProdutos);
    }


    header( "Location: home.php" );
?>