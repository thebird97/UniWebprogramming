<?php
$unokak = [
    [
        "nev" => "Tomika",
        "kor" => 24
    ],
    [
        "nev" => "Mateka",
        "kor" => 21
    ],
    [
        "nev" => "Esztike",
        "kor" => 19
    ],
    [
        "nev" => "Aronka",
        "kor" => 16
    ],
    [
        "nev" => "Borka",
        "kor" => 14
    ],

];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Intro</title>
</head>
<body>
<h2>Írjuk ki az emberek nevét, sima foreach, echo</h2>
<table>
    <tr>
        <th>Név</th>
        <th>Életkor</th>
    </tr>
    <?php
    foreach ($unokak as $u) {
        echo "<tr>";
        echo "<td>" . $u["nev"] . "</td>" . "<td>" . $u["kor"] . "</td>";
        echo "</tr>";

    }
    ?>
</table>


<h2>Írjuk ki az emberek nevét, másik</h2>
<table>
    <?php foreach ($unokak as $u) { ?>
        <tr>
            <td>Unoka neve: <?= $u["nev"]; //masik echo   ?></td>

            <td>Unoka kora: <?php if ($u["kor"] < 18) {
                    echo "Kiskorú";
            }
                else  {
                    echo $u["kor"];
                }?></td>

        </tr>
    <?php } ?>
</table>
</body>
</html>