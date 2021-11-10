<?php
include 'partials/_dbconnect.php';
    if(isset($_POST['name'])){
        $name = $_POST['name'];  
        $age = $_POST['age']; 
        $email = $_POST['email'];;
        $password = $_POST['password']; 
        $sql = "INSERT INTO `user` (`id`, `name`, `email`, `age`, `password`, `date`) VALUES ('', '$name', '$email', '$age', '$password', current_timestamp())";
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
                $message = 'Signup successfully';
                json_encode([
                    'msg' => $message,
                ]);
            }else{
                $message = 'Something went wrong';
                echo json_encode([
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