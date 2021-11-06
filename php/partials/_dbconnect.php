<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "qbonanza";
$conn = mysqli_connect($host,$user,$pass,$db);
class data{
    public $status;
    public $message;
    function __construct($status, $message){
        $this->status = $status;
        $this->message = $message;
    }
}
if(!$conn){
    $data = new data(false, "lol");
    echo $data;
}

?>