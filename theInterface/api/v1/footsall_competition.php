<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/18/2017
 * Time: 8:58 PM
 */
require __DIR__."/../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "GET"){
    $query = "SELECT * FROM footsall_competition";
    if(!empty($_GET)){
        $query = $query." WHERE ";
        $size = count($_GET);
        $i = 0;
        foreach($_GET as $param => $value) {
            $i++;
            if($i==$size){
                if($param == "university1" or "university2" or "winner") $query = $query . " $param LIKE '%$value%'";
                if($param == "id" or "timestart" or "date" or "placeid" or "u1score" or "u2score") $query = $query . " $param = '$value'";
            }else{
                if($param == "university1" or "university2" or "winner") $query = $query . " $param LIKE '%$value%' AND";
                if($param == "id" or "timestart" or "date" or "placeid" or "u1score" or "u2score") $query = $query . " $param = '$value' AND";
            }
        }
    }
    $raw_result = $connector->query($query);
    $json_text = json_encode(resultToArray($raw_result));
    echo $json_text;
}