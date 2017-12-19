<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/18/2017
 * Time: 8:05 PM
 */
require __DIR__."/../../connector/connector.php";

header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "GET"){
    $query = "SELECT * FROM competitors";
    if(!empty($_GET)){
        $query = $query." WHERE ";
        $size = count($_GET);
        $i = 0;
        foreach($_GET as $param => $value) {
            $i++;
            if($i==$size){
                if($param == "name" or "lastname" or "university") $query = $query . " $param LIKE '%$value%'";
                if($param == "id") $query = $query . " $param = '$value'";
            }else{
                if($param == "name" or "lastname" or "university") $query = $query . " $param LIKE '%$value%' AND";
                if($param == "id") $query = $query . " $param = '$value' AND";
            }
        }
    }
    $raw_result = $connector->query($query);
    $json_text = json_encode(resultToArray($raw_result));
    echo $json_text;
}else{
    $raw_result = array("ERROR" => "METHOD Not allowed");
    echo json_encode($raw_result);
}