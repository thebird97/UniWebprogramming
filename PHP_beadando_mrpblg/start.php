<?php

require_once("lib/storage.php");
require_once("lib/auth.php");
session_start();


/*
id => [
    from: neptun
    to: neptun
    content: szöveg
]
*/

$auth = new Auth(new Storage(new JsonIO("data/users.json")));