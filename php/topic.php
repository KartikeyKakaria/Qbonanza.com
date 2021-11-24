<?php
include 'partials/_dbconnect.php';
if($SERVER['REQUEST_METHOD'] == 'POST'){
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);
    if($data->post){

    }
    else{
        $sql = "SELECT*FROM `questions`";
        try{
            //Get DB Object
            $database = new Database();
            //Connect
            $db = $database->getConnection();
            //prepare sql1 statement
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            if($result){
                foreach($result as $row){
                    $userid = $row->user_id;
                    $title = $row->title;
                    $description = $row->description;
                    $userSql = "SELECT*FROM `user` WHERE `user`.`id` = '$userid'";
                    $result = mysqli_query($userSql);
                    $userName = "";
                    while($row = mysqli_fetch_assoc($result)){
                        $userName = $row['name'];
                    }
                    $data =array(
                        'userName' => $userName,
                        'title' => $title,
                        'description' => $description,
                    );
                    echo json_encode($data);
                }
               
            }
            else{
                $message = 'Something went wrong. We are sorry for the inconvenience caused.';
                echo json_encode([
                    'login' => false,
                    'msg' => $message,
                ]);
            }
        }catch(PDOException $e){
            $data = array('login'=>false,'message'=>$e->getMessage());
            echo json_encode($data);
        }
    }
}
else{
    echo 'NO POSTING BRUH';
}
?>