<?php
    include '_dbconnect.php';
    $json = file_get_contents('php://input');
    $dat = json_decode($json);
    $id = $dat->id;
    $sql = "SELECT*FROM `qbonanza`.`user` WHERE `user`.`id` = '$id'";
    try{
        //Get DB Object
        $database = new Database();
        //Connect
        $db = $database->getConnection();
        //prepare sql1 statement
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $id = $stmt->fetchAll(PDO::FETCH_OBJ);
        // $topics = new Topics();
        if($id){
           foreach($id as $user){
               echo $user->name;
           }
        //    echo json_encode($topics);
        }
    }catch(PDOException $e){
        echo '"error": {"text": '.$e->getMessage().'}';
    }
    // echo($_SERVER['REQUEST_METHOD'] )
?>