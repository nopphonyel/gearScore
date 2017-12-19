<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/19/2017
 * Time: 2:06 AM
 */

require __DIR__."/../../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "POST"){

    $university = $_POST['university'];

    $query = "INSERT INTO footsall_team ( 'uname' ) VALUES 
  ('$university');";

    $raw_result = $connector->query($query);
    if($raw_result){
        $result = array("Operation" => "success");
    }else{
        $result = array("Operation" => "failed");
    }
    echo json_encode($result);
}