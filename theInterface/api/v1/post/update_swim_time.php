<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/19/2017
 * Time: 1:08 AM
 */

require __DIR__."/../../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "POST"){

    $query = "UPDATE swim_competitor SET ";
    if(!empty($_POST)){
        $id = $_POST['id'];
        $program = $_POST['program'];
        $swimtime = $_POST['swimtime'];
    }

    $query .= "swimtime = '$swimtime'";
    $query .= " WHERE id = ".$id." and program = ".$program.";";

    //echo $query;

    $raw_result = $connector->query($query);
    if($raw_result){
        $result = array("Operation" => "success");
    }else{
        $result = array("Operation" => "failed");
    }
    echo json_encode($result);
}