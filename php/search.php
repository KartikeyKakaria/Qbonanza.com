<?php
include 'partials/_dbconnect.php';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $json = file_get_contents('php://input');
    $dat = json_decode($json);
    $query = $dat->query;
    $words = explode('%20',$query);
    $results = array();
    // echo json_encode($dat);
    $sql = "SELECT*FROM `qbonanza`.`questions`";
    try{
        //Get DB Object
        $database = new Database();
        //Connect
        $db = $database->getConnection();
        //prepare sql1 statement
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $id = $stmt->fetchAll(PDO::FETCH_OBJ);
        // echo json_encode($id);
        foreach($id as $row){
             //fetches all the properties of the question and sets initially that is the search result matching with query to false
      $isIncluded = false;
      $id = $row->id;
      $description = $row->description;
      $title = $row->title;
      //sets the number of times the query was found to be 0 initially
      $included = 0;
      //loops through all words of the query
      foreach($words as $key => $word){
        //checks whether the word is included in the description of the question or not
        $wordPattern = "/\W$word\W/i";
        $descriptionT = ".".$description.".";
        if(preg_match_all($wordPattern,$descriptionT) > 0){
          //sets isIncluded to true if it finds the word in the description
          $search = true;
          $isIncluded = true;
          $included++;
        } 
      }
      if($isIncluded){
        //pushes the question into the array with all the search results
       $results[$id] = $included;
      }
        }
        echo json_encode($results);
    }catch(PDOException $e){
        echo '"error": {"text": '.$e->getMessage().'}';
    }
}
else{
    echo 'post kr bhai';
}
?>