<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/19/2017
 * Time: 2:25 AM
 */

require __DIR__."/../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "GET"){
    $query = "SELECT * FROM swim_program";
    if(!empty($_GET)){
        $query = $query." WHERE ";
        $size = count($_GET);
        $i = 0;
        foreach($_GET as $param => $value) {
            $i++;
            if($i==$size){
                if($param == "title") $query = $query . " $param LIKE '%$value%'";
                if($param == "id" or "timestart" or "date") $query = $query . " $param = '$value'";
            }else{
                if($param == "title") $query = $query . " $param LIKE '%$value%' AND";
                if($param == "id" or "timestart" or "date") $query = $query . " $param = '$value' AND";
            }
        }
    }
    $raw_result = $connector->query($query);
    $json_text = json_encode(resultToArray($raw_result));
    echo $json_text;
}