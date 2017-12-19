<?php
/**
 * Created by PhpStorm.
 * User: nopph
 * Date: 12/18/2017
 * Time: 8:03 PM
 */

require __DIR__."/../config/config.php";
require __DIR__."/../lib/mysqliplus.php";

$db = $config['db'];
$dbname = $db['dbname'];
$user = $db['user'];
$pass = $db['pass'];
$host = $db['host'];
$connector = new mysqli($host , $user , $pass , $dbname);
$connector -> set_charset("utf8");
if($connector->connect_error){
    die("Failed to connect to DB : " . $connector->connect_error);
}
