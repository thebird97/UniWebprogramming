<?php
include_once('data.php');

function unique_multidim_array($array, $key)
{
    $temp_array = array();
    $i = 0;
    $key_array = array();

    foreach ($array as $val) {
        if (!in_array($val[$key], $key_array)) {
            $key_array[$i] = $val[$key];
            $temp_array[$i] = $val;
        }
        $i++;
    }
    return $temp_array;
}

function differnetAllomas($i)
{
    global $locations;
    $stations = [];
    foreach ($locations as $key => $value) {
        if ($value["district"] === $i) {
            array_push($stations, $value);
        }
    }

    $unique = unique_multidim_array($stations, "station_id");

    return count($unique);
}

function min_by_key($arr, $key)
{
    $min = array();
    foreach ($arr as $val) {
        if (!isset($val[$key]) and is_array($val)) {
            $min2 = min_by_key($val, $key);
            $min[$min2] = 1;
        } elseif (!isset($val[$key]) and !is_array($val)) {
            return false;
        } elseif (isset($val[$key])) {
            $min[$val[$key]] = 1;
        }
    }
    return min(array_keys($min));
}

//c. (2 pont) A táblázat harmadik oszlopában add meg, hogy melyik évben nyílt az adott kerületben az első állomás!

function elsoAllomas($i)
{
    global $locations;
    global $stations;
    $allomasok = [];
    $elsoallomas = 0;
    foreach ($locations as $lkey => $lvalue) {
        if ($lvalue["district"] === $i) {
            foreach ($stations as $skey => $svalue) {
                if ($svalue["id"] === $lvalue["station_id"]) {
                    //echo $svalue["id"] . " === " . $lvalue["station_id"];
                    //echo "<br>". $svalue["year"];
                    array_push($allomasok, $svalue["year"]);
                    //echo "jo";
                }
            }

        }
    }


    $elsoallomas = min($allomasok);


    return $elsoallomas;

}

//d. (1 pont) A táblázat negyedik oszlopában jelöld külön 🏆 ikonnal azokat a kerületeket,
// ahol már a rendszer indulásának évében (ez a legkisebb évszám, ami az adatok között előfordul) nyílt állomás!
function nyiltallomas($i)
{
    global $locations;
    global $stations;
    $rendszerindulaseve = min_by_key($stations, "year");

    return $rendszerindulaseve;
}


function osszzesAllomas($i)
{
    global $locations;
    $stations = [];
    foreach ($locations as $key => $value) {
        if ($value["district"] === $i) {
            array_push($stations, $value);
        }
    }



    return count($stations);

}


//e. (2 pont) A táblázat utolsó oszlopában add meg,
// hogy az adott kerületben mennyi a kerékpárdokkolók átlagos száma állomásonként!
function dokkperallomas($i)
{
    global $locations;
    global $stations;
    $docksnum = 0;
    foreach ($locations as $lkey => $lvalue) {
        if ($lvalue["district"] === $i) {
            foreach ($stations as $skey => $svalue) {
                if ($svalue["id"] === $lvalue["station_id"]) {
                    $docksnum += $svalue["docks"];

                }

            }
        }
    }
    $osszesallomas = osszzesAllomas($i);
    $megoldas = $docksnum/$osszesallomas;
    return $megoldas ;
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rentable Bicycles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/elte-fi/www-assets@19.10.16/styles/mdss.min.css">
</head>

<body>
<h1>Rentable Bicycles</h1>
<table>
    <tr>
        <thead>
        <th>District</th>
        <th>Stations</th>
        <th>Opened</th>
        <th>🏆</th>
        <th>Avg docks</th>
        </thead>
    </tr>
    <?php for ($i = 1; $i <= 14; $i++) { ?>
        <tr>
            <th>Budapest <?php echo $i ?></th>
            <th><?php echo differnetAllomas($i); ?></th>
            <th><?php echo elsoAllomas($i); ?></th>
            <?php if (nyiltallomas($i) === elsoAllomas($i)) { ?>
                <th>🏆</th>
            <?php } else { ?>
                <th></th>
            <?php } ?>
            <th><?php echo  dokkperallomas($i); ?></th>
        </tr>
    <?php } ?>
    <tbody>

    </tbody>
</table>
</body>

</html>