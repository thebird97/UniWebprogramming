<?php
$baseline = 3913550;
$daily = [
    1 => 109587,
    2 => 41067,
    3 => 8945,
    4 => 26346,
    5 => 24202,
    6 => 29341,
    7 => 50835,
    8 => 57949,
    9 => 26819,
    10 => 17134,
    11 => 40314,
    12 => 45705,
    13 => 28973,
    14 => 62831,
    15 => 71081,
    16 => 45333,
    17 => 39287,
    18 => 75693,
    19 => 76004,
    20 => 38599,
    21 => 69271,
    22 => 70455,
    23 => 36361,
    24 => 17463,
    25 => 3384,
    26 => 13693,
    27 => 16040,
    28 => 28380,
    29 => 35467,
    30 => 16922,
    31 => 9918
];
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Oltakozók száma</title>
</head>
<body>
<h1>Oltakozók száma</h1>

<h2>Táblázat</h2>
<table>
    <thead>
    <tr>
        <th>Dátum</th>
        <th>Új oltott</th>
        <th>Összesen</th>
    </tr>
    </thead>
    <tbody>
    <?php  $milestone = false; ?>
    <?php foreach ($daily as $day_key => $day_value){ $baseline += $day_value;?>
    <?php if($baseline > 4999999  && $milestone===false){ ?>
    <tr class="milestone">
        <?php $milestone=true;  } else{ ?>
    <tr>
        <?php } ?>
        <td>2021. május <?php echo $day_key; ?>.</td>
        <td><?php echo $day_value; ?></td>
        <td><?php echo $baseline; ?></td>

    </tr>
    <?php } ?>
    </tbody>
</table>

<h2>Grafikon</h2>
<svg viewBox="0 0 620 200">
    <polyline points="
            0,100
            120,60
            200,80
            400,50
            500,0
        ">
</svg>
</body>
</html>
