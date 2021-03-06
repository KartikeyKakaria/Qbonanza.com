<?php
include 'partials/_dbconnect.php';
if($_SERVER['REQUEST_METHOD']=="POST"){
    
    $sql = "SELECT * FROM `qbonanza`.`topics`";
    try{
        //Get DB Object
        $database = new Database();
        //Connect
        $db = $database->getConnection();
        //prepare sql1 statement
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $id = $stmt->fetchAll(PDO::FETCH_OBJ);
        $topics = new Topics();
        if($id){
           foreach($id as $topic){
               array_push($topics->topic,$topic);
           }
           echo json_encode($topics);
        }else{
           echo var_dump($id);
        }
    }catch(PDOException $e){
        echo '"error": {"text": '.$e->getMessage().'}';
    }
}
else{
    echo "method not supported";
}


?>