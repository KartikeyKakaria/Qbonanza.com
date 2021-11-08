<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "qbonanza";
$conn = mysqli_connect($host,$user,$pass,$db);

if(!$conn){
    echo "ERROR LMAO";
}

?>