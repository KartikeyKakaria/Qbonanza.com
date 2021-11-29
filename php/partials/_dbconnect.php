<?php
class Database{
 
    private $database = "ddk2dl27bum747"; //database name
    private $uid = "ristyykeyooujp"; //username
    private $pwd = "7a9de02f83b55f8326aeb12da89cf44a64ee89b8e6fa7b9e5b85f65646c3137e"; //password
    public $conn;

 // get the database connection
 public function getConnection(){

     $this->conn = null;

     try{
         $this->conn = new PDO("mysql:host=ec2-50-16-241-192.compute-1.amazonaws.com;dbname=" . $this->database, $this->uid, $this->pwd);
         $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
     }catch(PDOException $exception){
         echo "Connection error : " . $exception->getMessage();
     }

     return $this->conn;
 }
}
 ?>
 <?php
class Topics{
     public $topic;
     
     public function __construct(){
         $this->topic = array();
     }
 }
 ?>

