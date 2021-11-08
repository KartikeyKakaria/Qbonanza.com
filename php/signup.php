<?php
include 'partials/_dbconnect.php';
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];
$password = $_POST['password'];
$sql = "INSERT INTO `user` (`id`, `name`, `email`, `age`, `password`, `date`) VALUES ('', '$name', '$email', '$age', '$password', current_timestamp())";
$result = mysqli_query($conn, $sql);
if($result){
   echo $name;
}
else{
    echo mysqli_error($conn);
}
?>