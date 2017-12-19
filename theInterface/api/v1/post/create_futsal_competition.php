<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/18/2017
 * Time: 10:15 PM
 */

require __DIR__."/../../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "POST"){
    $query = "INSERT INTO footsall_competition (";
    $putVal = "";
    if(!empty($_POST)){
        $size = count($_POST);
        $i = 0;
        foreach($_POST as $param => $value) {
            $i++;
            if($i==$size){
                $query = $query.$param.") VALUES (";
                $putVal = $putVal."'".$value."');";
            }else{
                $query = $query.$param.",";
                $putVal = $putVal."'".$value."',";
            }
        }
    }
    $query = $query.$putVal;
    $raw_result = $connector->query($query);
    if($raw_result){
        $result = array("Operation" => "success");
    }else{
        $result = array("Operation" => "failed");
    }
    echo json_encode($result);
}