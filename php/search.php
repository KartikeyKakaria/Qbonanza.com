<?php
include 'partials/_dbconnect.php';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $json = file_get_contents('php://input');
    $dat = json_decode($json);
    echo json_encode($dat);
}
else{
    echo 'post kr bhai';
}
?>