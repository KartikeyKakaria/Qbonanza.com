<?php
include '_dbconnect.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $quesId = $data->quesid;
    $sql = "SELECT*FROM `qbonanza`.`questions` WHERE `questions`.`id` = '$quesId'";
    try{
        //Get DB Object
        $database = new Database();
        //Connect
        $db = $database->getConnection();
        //prepare sql1 statement
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        if(count($result)==1){
            echo json_encode($result[0]);
        }
        else{
            $message = 'Something went wrong. We are sorry for the inconvenience caused.';
            echo json_encode($result);
        }
    }catch(PDOException $e){
        $data = array('login'=>false,'message'=>$e->getMessage());
        echo json_encode($data);
    }
}
else{
    echo 'bruhhhhhh gettttt';
}
?>