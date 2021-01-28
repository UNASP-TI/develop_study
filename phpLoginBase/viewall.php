<?php
include 'connect.php';

if(isset($_SESSION['id']) == false)
{
    include 'logout.php';
}
?>
<table border='1'>
    <tr>
        <th>
            Name
        </th>
        <th>
            Username
        </th>
    </tr>

<?php
$sq="select * from pessoa";
$qu=mysqli_query($con,$sq);
while($f=  mysqli_fetch_assoc($qu)){
    ?>
    <tr>
        <td>
            <?php echo $f['name']?>
        </td>
        <td>
            <?php echo $f['username']?>
        </td>
    </tr>
    <?php
}
?>

<a href="home.php">Home Page </a> 