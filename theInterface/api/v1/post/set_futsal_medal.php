<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/19/2017
 * Time: 1:56 AM
 */

require __DIR__."/../../../connector/connector.php";
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] == "POST"){

    $query = "UPDATE footsall_team SET ";
    if(!empty($_POST)){
        $university = $_POST['university'];
        $medal = $_POST['medal'];
    }

    $query .= "medal = '$medal'";
    $query .= " WHERE uname = '".$university."';";

    if($medal == "gold" or "silver" or "bronze") {
        $update_total_medal_q = "UPDATE universities SET";
        if ($medal == "gold") $update_total_medal_q .= " gold = gold + 1 ";
        else if ($medal == "silver") $update_total_medal_q .= " silver = silver + 1 ";
        else if ($medal == "bronze") $update_total_medal_q .= " bronze = bronze + 1 ";
        $update_total_medal_q .= " , total = gold + silver + bronze WHERE name = '".$university."';";
        $raw_update_result = $connector->query($update_total_medal_q);
        if($raw_update_result) $update_result = "success";
        else $update_result = "failed";
    }

    //echo $update_total_medal_q."<br>";
    //echo $query;

    $raw_result = $connector->query($query);
    if($raw_result){
        $result = array(
            "update_total" => $update_result,
            "Operation" => "success");
    }else{
        $result = array(
            "update_total" => $update_result,
            "Operation" => "failed");
    }
    echo json_encode($result);
}