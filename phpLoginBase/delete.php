<?php
include 'connect.php';

$sq="delete from pessoa where id='$_SESSION[id]'";
mysqli_query($con,$sq);

include 'logout.php';

?>