<?php

session_start();
$silver = $_SESSION['silver'];
$succes = true;



if($silver += intval($_GET['change']>=0)){
    $silver += intval( $_GET['change']);
}else{
    $succes = false;
}
$_SESSION['silver'] = $silver;

$resp = [
  "time" => date("Y.m.d. H:i:s"),
  "balance" =>  floor($silver  / 12) . "g " .  $silver%12 . "s",
    "succes" =>$succes
];

echo json_encode($resp);

?>