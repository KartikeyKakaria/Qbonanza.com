<?php
if($_SERVER['REQUEST_METHOD']=="POST")
{
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $rep = array(
        'lol' => $data->ok,
    );
    echo json_encode($rep);
    // echo $data->ok;
}
else{
    echo "LOOOL";
}
?>