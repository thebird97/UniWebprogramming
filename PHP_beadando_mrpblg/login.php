<?php

require_once("start.php");

$errors = [];
$user = [];

function letezik($p){
    return isset($_POST[$p]) && strlen(trim($_POST[$p]))>0;
}


function hibatKiir($p){
    global $errors;
    if(isset($errors[$p])){
        return $errors[$p];
    }else{
        return "";
    }
}

function allapottartas($p){
    global $user;
    global $errors;
    if(count($errors) > 0 && isset($user[$p])){
        return $user[$p];
    }else{
        return "";
    }
}


if(count($_POST)>0){



    if(letezik("name")){
        $username = trim($_POST["name"]);

    }else{
        $errors["name"] = "Nem töltötted ki username-t!";
    }


    if(letezik("password")){
        $password = trim($_POST["password"]);
    }else{
        $errors["password"] = "Írd be a jelszót!";
    }


    if(count($errors)===0){
        echo $_POST["name"] . $_POST["password"];
        $user_login = $auth -> authenticate($_POST["name"], $_POST["password"]);

        if($user_login){
            $auth->login($user_login);
            header("Location: index.php");
        }else{
           header("Location: index.php?error=Rossz+felhasználónév+vagy+jelszó");
           die();

        }
    }


}


?>



<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: black;
        }

        * {
            box-sizing: border-box;
        }

        /* Add padding to containers */
        .container {
            padding: 16px;
            background-color: white;
        }

        /* Full-width input fields */
        input[type=text], input[type=password] {
            width: 50%;
            padding: 15px;
            margin: 5px 0 22px 0;
            display: inline-block;
            border: none;
            background: #f1f1f1;
        }

        input[type=text]:focus, input[type=password]:focus {
            background-color: #ddd;
            outline: none;
        }

        /* Overwrite default styles of hr */
        hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
        }

        /* Set a style for the submit button */
        .registerbtn {
            background-color: #04AA6D;
            color: white;
            padding: 16px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            opacity: 0.9;
        }

        .registerbtn:hover {
            opacity: 1;
        }

        /* Add a blue text color to links */
        a {
            color: dodgerblue;
        }

        /* Set a grey background color and center the text of the "sign in" section */
        .signin {
            background-color: #f1f1f1;
            text-align: center;
        }
    </style>
</head>
<body>
<?php
if(count($errors)===0){
    echo "Bejelentkezés";
}
?>

<form action="login.php" novalidate  method="POST">
    <div class="container">
        <h1>Bejelentkezés</h1>
        <p>Kérlek tölts ki mindent!</p>
        <hr>

        <label for="nev"><b>Felhasználó neved</b></label>
        <input type="text" placeholder="Írd be a felhasználó neved" name="name" id="name"  value="<?=allapottartas("name")?>"> <?= hibatKiir("name")?>
        <hr>

        <label for="psw"><b>Jelszó</b></label>
        <input type="password" placeholder="Enter Password" name="password" id="password" value="<?=allapottartas("password")?>" > <?= hibatKiir("password")?>
        <hr>

        <button type="submit" class="registerbtn">Bejelentkezek!</button>
    </div>

    <div class="container signin">
        <p>Vissza a főoldalra <a href="index.php">Főoldal</a>.</p>
    </div>


</form>

</body>
</html>
