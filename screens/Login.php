<?php
session_start(); 
$error=''; 

if (isset($_POST['submit'])) {
if (empty($_POST['email']) || empty($_POST['password'])) {
$error = "email or password is invalid";
}
else
{
// Define $email and $password
$Email=$_POST['email'];
$Password=$_POST['password'];
// Establishing Connection with Server by passing server_name, email and password as a parameter
include("connection.php");

// SQL query to fetch information of registerd users and finds user match.
$query = "SELECT Email, Password FROM user WHERE Email=? AND Password=? LIMIT 1";

// To protect MySQL injection for Security purpose
$stmt = $conn->prepare($query);
$stmt -> bind_param("ss",$Email, $Password);
$stmt -> execute();
$stmt -> bind_result($Email, $Password);
$stmt -> store_result();

if ($stmt->fetch())  
{
	$_SESSION['login']=$Email; // Initializing Session
	header("location: Home.js"); // Redirecting To Other Page
} else {
$error = "Email or Password is invalid";
}
mysqli_close($conn); // Closing Connection
}
}
?>