<?php

function letezik($kulcs)
{
    return (isset($_GET[$kulcs]));
}


$hibak = [];
$eredmeny = [];

if (count($_GET) > 0) {


//név ellenőrzése,
    $str = $_GET["name"];
    $str == trim($str) ;
    if (letezik("name") && strlen(trim($_GET["name"])) > 0 and  strpos($str, ' ') !== false) {
        $eredmeny["name"] = $_GET["name"];
    }
    if (strlen(trim($_GET["name"])) < 0) {
        $hibak["name"] = ". A név üres";
    }
    if (strpos($str, ' ') == false) {
        $hibak["name"] = ". A névben nincs space!";
    }


    $str2 = $_GET["country"];

    if (letezik("country") && strlen(trim($_GET["country"])) > 0 ) {
        $eredmeny["country"] = $_GET["country"];
    }else {
        $hibak["country"] = "Az ország nem lehet üres";
    }


    if(letezik("email")){
        if(filter_var($_GET["email"], FILTER_VALIDATE_EMAIL)){
            $eredmeny["email"] = $_GET["email"];
        }else{
            $hibak["email"] = "E-mail nem megfelő forma!";
        }
    }else{
        $hibak["email"] = "Nincs email megadva!";
    }


}

print_r($hibak);
echo "<br>";
print_r($eredmeny);
//1 pont: megjelenik a "Minden adat helyes, a regisztráció sikeres volt!" üzenet, ha nem volt hiba
if(empty($hibak)===true){
    echo "A regisztráció sikeres volt!";
}

?>


<!DOCTYPE html>
<html>
<body>

<h2>HTML Forms</h2>

<form action="urlap.php" method="get">
    <label for="name">Név</label><br>
    <input type="text" id="name" name="name"><br>

    <label for="country">Orrszág</label><br>
    <input type="text" id="country" name="country" value="Javascrpisztán">
    <br><br>

    <label for="email">Külügyminisztérium e-mail címe:</label><br>
    <input type="text" id="email" name="email" value="">
    <br><br>

    <input type="radio" id="magan" name="utazas" value="magan"
           checked>
    <label for="magan">Magángép</label>
    <br>
    <input type="radio" id="tarsasag" name="utazas" value="tarsasag">
    <label for="tarsasag">Légitársaság</label>


    <br><br>
    <input type="submit" value="Submit">
</form>


</body>
</html>

