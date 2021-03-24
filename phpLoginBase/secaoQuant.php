
<!-- https://www.tutorialspoint.com/php/php_sessions.htm -->
<?php

session_start();

if(isset($_POST['sub'])){
    
    $quant=$_POST['quant'];

    if(isset( $_SESSION['counter'] ) ) {
        $_SESSION['counter'] += $quant;
    }else {
        $_SESSION['counter'] = $quant;
    }
}else if(isset($_POST['clear'])){
    unset($_SESSION['counter']);
}



if( isset($_SESSION['counter']) ){
    $msg = "You have visited this page ".$_SESSION['counter'];
}else{
    $msg = "You don't have value in variable counter";
}

$msg .= " in this session.";
?>




<html>
   
   <head>
      <title>Setting up a PHP session</title>
   </head>
   
   <body>
      <?php  echo ( $msg ); ?>


      <form method="POST" enctype="multipart/form-data">
            <table>
                
                <tr>
                    <td>
                        Quant
                        <input type="text" name="quant">
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="submit" name="sub" value="Adicionar">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" name="clear" value="Limpar">
                    </td>
                </tr>

               
            </table>
    </body>
   </body>
   
</html>