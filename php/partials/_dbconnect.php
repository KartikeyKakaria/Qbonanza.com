<?php
class Database{
 
    private $database = "qbonanza"; //database name
    private $uid = "root"; //username
    private $pwd = ""; //password
    public $conn;

 // get the database connection
 public function getConnection(){

     $this->conn = null;

     try{
         $this->conn = new PDO("mysql:localhost;dbname=" . $this->database, $this->uid, $this->pwd);
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
 class questions{
     public $question;
     public function __construct(){
         $this->question = array();
     }
 }
 ?>
