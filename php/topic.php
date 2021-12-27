<?php
include 'partials/_dbconnect.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $json = file_get_contents("php://input");
    $data = json_decode($json);
    $id = $data->id;
    // echo $id;
    function displayQuestions($id){
        $sql = "SELECT * FROM `qbonanza`.`questions` WHERE `topic_id` = '$id'";
        try {
            //Get DB Object
            $database = new Database();
            //Connect
            $db = $database->getConnection();
            //prepare sql1 statement
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            // echo var_dump($result);
            // if($result) {
                $data = new questions();
                $dataTopic = $data->question;
                foreach($result as $question) {
                    array_push($dataTopic, $question);
                }
                $data->question = $dataTopic;
                echo json_encode($data);
            // }
            // echo 'hi';
            
        } catch (PDOException $e) {
            // echo ;
        }
    }
    // if($data->post){
    displayQuestions($id);
    
    // }
    // else{
        
    // }
}
else{
    echo 'NO POSTING BRUH';
}
?>