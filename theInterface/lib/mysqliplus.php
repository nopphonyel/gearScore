<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/18/2017
 * Time: 8:03 PM
 */

function resultToArray($result) {
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    return $rows;
}