<?php
include 'partials/_dbconnect.php';
if($_SERVER['REQUEST_METHOD']=="POST"){
    $json = file_get_contents('php://input');
    $dat = json_decode($json);
    $email = $dat->email;
    $password = $dat->password;
    $sql = "SELECT*FROM `qbonanza`.`user` WHERE `user`.`email` = '$email'";
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
            if(count($result) == 1){
                if($result[0]->password == $password){
                    $data = $result[0];
                    $user = array(
                                'login' => true,
                                "message" => 'Loginned successfully!',
                                "id" => $data->id,
                                "name" => $data->name,
                                "email" => $data->email,
                                "age" => $data->age,
                                "date" => $data->date,
                            );
                    echo json_encode($user);
                }
                else{
                    $message = 'Invalid email or password';
                    echo json_encode([
                        'login' => false,
                        'msg' => $message,
                    ]);
                }
            }
            else{
                $message = 'Invalid email or password';
                echo json_encode([
                    'login' => false,
                    'msg' => $message,
                ]);
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
else{
    echo "METHOD NOT POST!";
}

?>