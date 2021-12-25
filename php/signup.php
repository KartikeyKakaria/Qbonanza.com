<?php
    // echo $data->name;
    include 'partials/_dbconnect.php';
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $name = $data->name;  
        $age = $data->age; 
        $email = $data->email;
        $password = $data->password; 
        $sql = "INSERT INTO `qbonanza`.`user` (`id`, `name`, `email`, `age`, `password`, `date`) VALUES ('', '$name', '$email', '$age', '$password', current_timestamp())";
        
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
                $message = 'Your account was created successfully. Now you can login to continue access to the website';
                echo json_encode([
                    'status' => true,
                    'msg' => $message,
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
    }else{
        echo 'method should be post';
    }

?>