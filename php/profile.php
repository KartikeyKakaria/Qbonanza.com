<?php
    include 'partials/_dbconnect.php';
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $json = file_get_contents("php://input");
        $data = json_decode($json);
        $name =$data->name;
        $email =$data->email;
        $age =$data->age;
        $ider = $data->id;
        $sql = "UPDATE `user` SET `name` = '$name', `email` = '$email', `age` = '$age' WHERE `user`.`id` = $ider";
        try{
            //Get DB Object
            $database = new Database();
            //Connect
            $db = $database->getConnection();
            //prepare sql1 statement
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $id = $db->lastInsertId();
            if($id){
                $message = 'Your account was updated successfully.';
                echo json_encode([
                    'status' => true,
                    'msg' => $message,
                    'id' => $ider,
                    'email' => $email,
                    'age' => $age,
                    'name' => $name,
                ]);
            }else{
                $message = 'Something went wrong. We are sorry for the inconvenience caused';
                echo json_encode([
                    'status' => false,
                    'msg' => $message,
                ]);
            }
        }catch(PDOException $e){
            echo '"error": {"text": '.$e->getMessage().'}';
        }
    }
    else{
        echo json_encode([
            'status'=>false,
            'message'=>'method should be POST'
        ]);
    }
?>