<?php
date_default_timezone_set('Europe/Budapest');

$vaccines = [
    'astrazeneca', 'pfizer', 'moderna', 'szputnyik', 'sinopharm'
];

function letezik($kulcs){
    return (isset($_GET[$kulcs]));
}

print_r($_GET);

$hibak = [];
$eredmeny = [];

if (count($_GET) > 0) {
    //name: kötelező, legalább 1 szóközt tartalmaz
    if(letezik("name") && strlen(trim($_GET["name"]))>0 && strpos($_GET["name"], ' ') !== false){
        $eredmeny["name"] = $_GET["name"];
    }else{
        $hibak["name"] = "name: kötelező, legalább 1 szóközt tartalmaz.";
    }
    //taj: kötelező, 9 hosszú, csak számokból állhat
    if(letezik("taj")){

        //itt fontos hogy nem tripla =, mert int(13) és float(13) nem ===egyenlő, csak ==hasonló!
        if((intval($_GET["taj"]) == floatval($_GET["taj"])) && intval($_GET["taj"]>=0) && strlen($_GET["taj"]) === 9){
            $eredmeny["taj"] = $_GET["taj"];
        }else{
            $hibak["taj"] = "taj: kötelező, 9 hosszú, csak számokból állhat";
        }
    }else{
        $hibak["taj"] = "Nem adtál meg tajt";
    }

    //vaccine: kötelező, a $vaccines tömb egyik eleme
    if(letezik("vaccine") && in_array( $_GET["vaccine"],$vaccines)){
        $eredmeny["vaccine"] = $_GET["vaccine"];
    }else{
        $hibak["vaccine"] = "vaccine: kötelező, a vaccines tömb egyik eleme!";
    }

    //time_of_vaccination: kötelező, az időpont nem lehet későbbi az aktuális időpontnál
    $current = strtotime(date("Y-m-d"));
    $date    = strtotime($_GET["time_of_vaccination"]);

    $time = strtotime($_GET["time_of_vaccination"]);
    $finalplusmonth  = date("Y-m-d", strtotime("+1 month", $time));
    if(letezik("time_of_vaccination")){
        $eredmeny["time_of_vaccination"] = $_GET["time_of_vaccination"];
    }else{
        $hibak["time_of_vaccination"] = "time_of_vaccination: kötelező, az időpont nem lehet későbbi az aktuális időpontnál";
    }

    if(letezik("2nd_vaccination")) {
        if (in_array("2nd_vaccination", $_GET["2nd_vaccination"])) {
            $eredmeny["2nd_vaccination"] = false;
        } else {
            $eredmeny["2nd_vaccination"] = true;
        }
    }

}

function hibasE($kulcs){
    global $hibak;
    return in_array($kulcs, array_keys($hibak));
}

function allapottarto($kulcs){
    global $hibak;
    global $eredmeny;
    return count($hibak)>0 || hibasE($kulcs) ? '' : $eredmeny[$kulcs];
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oltásadminisztráció</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
<h1>Oltásadminisztráció</h1>
<form action="index.php" method="get" novalidate>
    <div>
        <label for="name">Teljes név:</label>
        <input id="name" name="name" type="text" placeholder="Vezetéknév Keresztnév" value="<?=allapottarto("name")?>">
    </div>
    <div>
        <label for="taj">TAJ szám:</label>
        <input type="text" id="taj" name="taj" placeholder="123456789" value="<?=allapottarto("taj")?>">
    </div>
    <div>
        <label>Oltóanyag:</label>

        <input type="radio" id="vaccine_1" name="vaccine" value="astrazeneca" value="<?=allapottarto("kor")?>">
        <label for="vaccine_1">AstraZeneca</label>

        <input type="radio" id="vaccine_2" name="vaccine" value="pfizer">
        <label for="vaccine_2">Pfizer</label>

        <input type="radio" id="vaccine_3" name="vaccine" value="moderna">
        <label for="vaccine_3">Moderna</label>

        <input type="radio" id="vaccine_4" name="vaccine" value="szputnyik">
        <label for="vaccine_4">Szputnyik</label>

        <input type="radio" id="vaccine_5" name="vaccine" value="sinopharm">
        <label for="vaccine_5">SinoPharm</label>
    </div>
    <div>
        <label for="time_of_vaccination">Oltás időpontja:</label>
        <input type="datetime-local" id="time_of_vaccination" name="time_of_vaccination">
    </div>
    <div>
        <label for="2nd_vaccination">2. oltás?</label>
        <input type="checkbox" id="2nd_vaccination" name="2nd_vaccination">
    </div>
    <div>
        <button type="submit">Oltási adatok küldése</button>
    </div>
</form>

<h2>Üzenetek</h2>
<?php if(count($hibak)>0){?>
    <ul>
<?php foreach ($hibak as $hiba){?>
    <li><?php echo $hiba ?></li>
<?php }?>
    </ul>
<?php }?>

<?php if(count($hibak)===0){?>

    <?php if($eredmeny["2nd_vaccination"]===true){ ?>
<p>
    Gratulálok! Ön mától védett és másokat is véd!
</p>
    <?php }else{?>
        <p>
            A 2. oltás dátuma: <?php echo $finalplusmonth; ?>
        </p>
    <?php }?>

<?php }?>

<h2>Linkek</h2>
<ul>
    <li><a href="?">Semmi</a></li>
    <li><a href="?name=">?name=</a></li>
    <li><a href="?name=Barack">?name=Barack</a></li>
    <li><a href="?name=Alma+Korte">?name=Alma+Korte</a></li>
    <li><a href="?name=Alma+Korte+Szilva">?name=Alma+Korte+Szilva</a></li>
    <li><a href="?taj=">?taj=</a></li>
    <li><a href="?taj=almakorte">?taj=almakorte</a></li>
    <li><a href="?taj=1234567890">?taj=1234567890</a></li>
    <li><a href="?taj=123456789">?taj=123456789</a></li>
    <li><a href="?vaccine=">?vaccine=</a></li>
    <li><a href="?vaccine=alma">?vaccine=alma</a></li>
    <li><a href="?vaccine=moderna">?vaccine=moderna</a></li>
    <li><a href="?time_of_vaccination=">?time_of_vaccination=</a></li>
    <li><a href="?time_of_vaccination=2021-06-20T15%3A10">?time_of_vaccination=2021-06-20T15%3A10</a></li>
    <li><a href="?time_of_vaccination=2021-05-31T15%3A10">?time_of_vaccination=2021-05-31T15%3A10</a></li>
    <li><a href="?2nd_vaccination=on">?2nd_vaccination=on</a></li>
    <li><a href="?name=Hirte+Lenke&taj=123456789&vaccine=astrazeneca&time_of_vaccination=2021-06-01T15%3A10">?name=Hirte+Lenke&taj=123456789&vaccine=astrazeneca&time_of_vaccination=2021-06-01T15%3A10</a>
    </li>
    <li>
        <a href="?name=Hirte+Lenke&taj=123456789&vaccine=astrazeneca&time_of_vaccination=2021-06-01T15%3A10&2nd_vaccination=on">?name=Hirte+Lenke&taj=123456789&vaccine=astrazeneca&time_of_vaccination=2021-06-01T15%3A10&2nd_vaccination=on</a>
    </li>
</ul>
</body>
</html>