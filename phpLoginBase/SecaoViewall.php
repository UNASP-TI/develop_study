<!-- 
Sites de exemplo 

https://phpgurukul.com/how-to-create-a-shopping-cart-in-php/

https://codeshack.io/shopping-cart-system-php-mysql/

 -->

<?php
include 'connect.php';

if(isset($_SESSION['id']) == false)
{
    include 'logout.php';
}


if(isset($_POST['sub'])){
    
    $product_id = (int)$_POST['idProduto'];
    $quantity = (int)$_POST['quantity'];



    // Product exists in database, now we can create/update the session variable for the cart
    if (isset($_SESSION['cart']) && is_array($_SESSION['cart'])) {
        if (array_key_exists($product_id, $_SESSION['cart'])) {
            // Product exists in cart so just update the quanity
            $_SESSION['cart'][$product_id] += $quantity;
        } else {
            // Product is not in cart so add it
            $_SESSION['cart'][$product_id] = $quantity;
        }
    } else {
        // There are no products in cart, this will add the first product to cart
        $_SESSION['cart'] = array($product_id => $quantity);
    }



}
// else if(isset($_POST['clear'])){
//     unset($_SESSION['counter']);
// }



?>

<table border='1'>
    <tr>
        <th>
            Produto
        </th>
        <th>
            Preço
        </th>
    </tr>

<?php
$sq="select * from produto";
$qu=mysqli_query($con,$sq);
while($produto=  mysqli_fetch_assoc($qu)){
    ?>
    <tr>
        <td>
            <?php echo $produto['nomeProduto']?>
        </td>
        <td>
            <?php echo $produto['precoProduto']?>
        </td>
        <td>
            <form method="POST" enctype="multipart/form-data">
                <input type="number" name="quantity" value="1" min="1" placeholder="Quantity" required>
                <input type="hidden" name="idProduto" value="<?=$produto['idProduto']?>">
                <input type="submit" name="sub" value="Adicionar">
            </form>
        </td>
    </tr>
    <?php
}
?>

<!-- ---------------- -->

<?php foreach($_SESSION['cart'] as $key => $value):?>
    <ul>
        <li><?php echo $key." has the value ". $value;?></li>
    </ul>
<?php endforeach; ?>



<a href="home.php">Home Page </a> 