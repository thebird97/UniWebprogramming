<?php
$machines = ["Budapest-Nyugati", "Budapest-Keleti", "Budapest-Déli", "Budapest-Kelenföld", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely", "Szolnok", "Cegléd", "Békéscsaba"];
function letezik($kulcs)
{
    return (isset($_GET[$kulcs]));
}

$hibak = [];
$eredmeny = [];
var_dump($_GET);
if (count($_GET) > 0) {
    if (letezik("journey_from")) {
        if (strlen(trim($_GET["journey_from"])) > 0 && in_array($_GET["journey_from"], $machines)) {
            $eredmeny["journey_from"] = $_GET["journey_from"];
        } else {
            $hibak["journey_from"] = "Station departure invalid";
        }
    } else {
        $hibak["journey_from"] = "No station provided";
    }

    //b. (1 pont) A journey_to (célállomás) paraméter kitöltése kötelező, nem egyezhet meg a kiindulási állomással.
    if (letezik("journey_to")) {
        if (strlen(trim($_GET["journey_to"])) > 0 && $_GET["journey_from"] !== $_GET["journey_to"]) {
            $eredmeny["journey_to"] = $_GET["journey_to"];
        } else {
            $hibak["journey_to"] = "nem egyezhet meg a kiindulási állomással.";
        }
    } else {
        $hibak["journey_to"] = "A journey_to (célállomás) paraméter kitöltése kötelező";
    }

    //c. (1 pont) A price (jegyár) paraméter kitöltése kötelező, nemnegatív
    // //(0 Ft-os jegyet lehet vásárolni megfelelő kedvezménnyel), egész szám
    if (letezik("price")) {

        //itt fontos hogy nem tripla =, mert int(13) és float(13) nem ===egyenlő, csak ==hasonló!
        if ((intval($_GET["price"]) == floatval($_GET["price"])) && intval($_GET["price"] >= 0)) {
            $eredmeny["price"] = $_GET["price"];
        } else {
            $hibak["price"] = " A price (jegyár) nemnegatív csak pozitív egész szám lehet.";
        }
    } else {
        $hibak["price"] = "Nem adtál meg árt!";
    }

    /*d. (1 pont) A distance (megtett távolság)
     paraméter kitöltése kötelező, pozitív (nincs 0,00 km-es út), tizedestört vagy egész szám lehet.*/
    if (letezik("distance")) {

        if ( filter_var($_GET["distance"], FILTER_VALIDATE_FLOAT) && intval($_GET["distance"] > 0)) {
            $eredmeny["distance"] = $_GET["distance"];
        } else {
            $hibak["distance"] = " A distance  nemnegatív csak pozitív egész szám lehet. ÉS nem 0";
        }
    } else {
        $hibak["distance"] = "Nem adtál meg distance-t!";
    }



    //e. (1 pont) A paid (fizetve) jelölőmezőt kötelezően be kell jelölni!
    if (letezik("paid")) {


        if ( in_array("tst", $_GET["paid"] )) {
            $eredmeny["paid"] = $_GET["paid"];
        } else {
            $hibak["paid"] = "A paid be kell legyen pipálva";
        }
    } else {
        $hibak["paid"] = "Nem adtál meg paid-t!";
    }

}
print_r($hibak);
echo "<br>";
var_dump($eredmeny);

function hibasE($kulcs){
    global $hibak;
    return in_array($kulcs, array_keys($hibak));
}
/*
function allapottarto($kulcs){
    global $hibak;
    global $eredmeny;
    return count($hibak)>0 || hibasE($kulcs) ? '' : $eredmeny[$kulcs];
}*/

function allapottarto($p){
    global $eredmeny;
    global $hibak;
    if(count($hibak) > 0 && isset($eredmeny[$p])){
        return $eredmeny[$p];
    }else{
        return "";
    }
}


function hibatKiir($p){
    global $hibak;
    if(isset($hibak[$p])){
        return $hibak[$p];
    }else{
        return "";
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        div{
            display: inline;
        }
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>CO₂ Emission</title>
</head>

<body>
<h1>CO<sub>2</sub> Emission</h1>
<form action="index.php" method="get" novalidate>
    <label for="i1">Station of departure:</label> <input type="text" name="journey_from" id="i1" value="<?=allapottarto("journey_from")?>"><div style="color: red"><?= hibatKiir("journey_from")?></div> <br>
    <label for="i2">Destination station:</label> <input type="text" name="journey_to" id="i2" value="<?=allapottarto("journey_to")?>"> <div style="color: red"><?= hibatKiir("journey_to")?></div> <br>
    <label for="i3">Ticket price (HUF):</label> <input type="text" name="price" id="i3" value="<?=allapottarto("price")?>"><div style="color: red"><?= hibatKiir("price")?> </div><br>
    <label for="i4">Distance (km):</label> <input type="text" name="distance" id="i4" value="<?=allapottarto("distance")?>"><div style="color: red"><?= hibatKiir("distance")?> </div><br>
    <input type="checkbox" name="paid" id="i5" value="tst"><label for="i5">Ticket paid</label><div style="color: red"> <?= hibatKiir("paid")?></div><br>
    <button type="submit">Submit</button>
</form>
<?php if(count($hibak)==0){ ?>
<div class="big">Your CO<sub>2</sub> reduction is <span style="color: green"><?php echo $eredmeny["distance"]*0.13; ?></span> kg!</div>
<?php }?>
<h2>Test cases</h2>
<a href="index.php?journey_from=&journey_to=&price=&distance=">index.php?journey_from=&journey_to=&price=&distance=</a><br>
<a href="index.php?journey_from=Budafok&journey_to=&price=&distance=">index.php?journey_from=Budafok&journey_to=&price=&distance=</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=&price=&distance=">index.php?journey_from=Debrecen&journey_to=&price=&distance=</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=&distance=">index.php?journey_from=Debrecen&journey_to=Eger&price=&distance=</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=-3000&distance=">index.php?journey_from=Debrecen&journey_to=Eger&price=-200&distance=</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=3289.99&distance=">index.php?journey_from=Debrecen&journey_to=Eger&price=3289.99&distance=</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=">index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=long">index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=long</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=-99.5">index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=-99.5</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=210.8">index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=210.8</a><br>
<a href="index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=210.8&paid=on">index.php?journey_from=Debrecen&journey_to=Eger&price=3290&distance=210.8&paid=on</a><br>
</body>

</html>