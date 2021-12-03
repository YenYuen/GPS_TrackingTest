<?php
   require_once"connection.php";
   $json = file_get_contents('php://input');
   $obj = json_dcode($json,true);

   $username = $obj['username'];
   $email = $obj['email'];
   $password = $obj['password'];

   $query = "SELECT * FROM user where email = '{$email}'";
   $query_output = mysqli_query($conn, $query);
   $count = mysqli_num_rows($query_output);

   if($count == 1) {
       $arr = array ("result"=>"email_already_present");
       echo json_encode($arr);       
   }
   else if($count == 0){
    $queryl = "INSERT * INTO 'user' ('email', 'password', 'username') VALUE  ('{$email}', '{$password}', '{$username}')";
    $arr_outputl= array ('result'=>'ok');
    echo json_encode($arr);       
    }
    else
    {
        $arr = array ('result'=>'fail');
        echo json_encode($arr);       
    }
?>