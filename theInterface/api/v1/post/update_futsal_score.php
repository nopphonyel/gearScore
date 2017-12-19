<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/19/2017
 * Time: 12:18 AM
 */

require __DIR__."/../../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "POST"){

    $query_obtain = "SELECT university1 , university2 FROM footsall_competition WHERE id = ";
    $query_obtain .= $_POST['id'].";";

    $obtain_result = $connector->query($query_obtain);
    $obtain_result = resultToArray($obtain_result);

    echo $query_obtain;

    $uname1 = $obtain_result[0]['university1'];
    $uname2 = $obtain_result[0]['university2'];

    $query = "UPDATE footsall_competition SET ";
    if(!empty($_POST)){
        $u1score = $_POST['u1score'];
        $u2score = $_POST['u2score'];

        if($u1score < $u2score) $winner =  $uname2;
        else $winner = $uname1;
    }

    $query .= "winner = '$winner' , u1score = $u1score , u2score = $u2score";
    $query .= " WHERE id = ".$_POST['id'].";";

    //echo $query;

    $raw_result = $connector->query($query);
    if($raw_result){
        $result = array("Operation" => "success");
    }else{
        $result = array("Operation" => "failed");
    }
    echo json_encode($result);
}