<?php
include 'partials/_dbconnect.php';
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];
$password = $_POST['password'];
$sql = "INSERT INTO `user` (`id`, `name`, `email`, `age`, `password`, `date`) VALUES ('', '$name', '$email', '$age', '$password', current_timestamp())";
$result = mysqli_query($conn, $sql);
if($result){
    $data = ['status' => true, 'message' => "Success! Your account was created successfully. Now you can login to continue access to our website"];
    echo var_dump($data);
}
else{
    $error = mysqli_connect_error($conn);
    $data = ['status' => false, 'message' => $error];
    echo var_dump($data);
}

?>