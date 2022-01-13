<?php
$teams = json_decode(file_get_contents('data/teams.json'), true);
$matches = json_decode(file_get_contents('data/matches.json'), true);


foreach ($matches as $key => $val) {
    $time[$key] = $val["date"];
}

array_multisort($time, SORT_DESC, $matches);
//Slice only 5
$sliced_matches = array_slice($matches, 0, 5)

?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <style>
        body {
            background-color: lightgreen;
        }

        h1 {
            color: white;
            text-align: center;
        }

        h2 {
            color: orange;
            text-align: left;
        }

        p {
            font-family: verdana;
            font-size: 20px;
        }

        ul {
            list-style-type: circle;
            background: darkcyan;
        }

        li {
            position: relative;
            padding-left: 11px;
            margin-bottom: 8px;
        }

    </style>
    <meta charset="UTF-8">
    <title>Főoldal</title>
</head>
<body>
<h1>Eötvös Loránd Stadion szeretne megjelenni az interneten is!</h1>
<h2>Rövid ismertetés: </h2>
<p><i>Weboldal, ahol megjelennek a náluk játszott meccsek, illetve szeretnék, hogy a rajongók tudják követni kedvenceik
        eredményeit.</i></p>

<h2>A rendszerben létező csapatok: </h2>
<ul>
    <?php foreach ($teams as $key => $value) { ?>

        <li><a href="details.php?id=<?php echo $key; ?> "><?php echo $value["name"]; ?></a></li>
    <?php } ?>

</ul>

<h2>A legutóbbi 5 lejátszott meccs időrendi sorrendben: </h2>
<ul>
    <?php foreach ($sliced_matches as $mkey => $mvalue) { ?>

        <li><b>A match neve: </b><?php echo $mvalue["id"]; ?>
            | A hazai csapat pontja: <?php echo $mvalue["home"]["score"]; ?>
            | A vendég csapat pontja: <?php echo $mvalue["away"]["score"]; ?>
            | A match időpontja: <?php echo $mvalue["date"]; ?>

        </li>
    <?php } ?>

</ul>
<h2>Regisztráj vagy jelentkezz be: </h2>
<a href="login.php">Bejelentkezés</a>
<a href="register.php">Regisztráció</a>
</body>
</html>
