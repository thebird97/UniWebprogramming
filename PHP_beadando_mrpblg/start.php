<?php
require_once("lib/storage.php");
require_once("lib/auth.php");
require_once("data/alldata.php");

$messages = new Storage(new JsonIO("data/messages.json"));
$auth = new Auth(new Storage(new JsonIO("data/alldata.php")));