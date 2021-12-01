<?php

    $dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$dbname = "gpstracking";

	//Create Connection
	$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

	