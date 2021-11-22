<?php
    $CN = mysqli_connect("localhost","root","");
    $DB = mysqli_select db ($CN, "cst");

    $Name=$_POST['Name'];    
    $Email=$_POST['Email'];
    $Password=$_POST['Password'];

    $IQ="insert into user (Name,Email,Password) values ('$Name', '$Email', '$Password')";

    mysqli_query($CN,$IQ);

    if($R)
    {
        $Massage= "You're successfully registered";
    }
    else
    {
        $Massage= "Please try again";
    }

    $Response[] = array ("Massage" => $Massage);
    echo json_enode($Response);

?>
    