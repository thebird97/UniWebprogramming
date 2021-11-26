<?php $leaders = [
    [
        "president" => "Szurcsányi József",
        "country" => "Javascriptsztán",
        "travel" => "magánrepülő"
    ],
    [
        "president" => "Szűts István",
        "country" => "Phptopia",
        "travel" => "légitársaság"
    ],
    [
        "president" => "Bálinth András",
        "country" => "Arrow Function Isles-i Köztársaság",
        "travel" => "vonat"
    ],
    [
        "president" => "Zágrábi Zoltán",
        "country" => "Haskelli Népköztársaság", "travel" => "személyautó"
    ],
    [
        "president" => "Matthew Latte",
        "country" => "Kígyós-felföld",
        "travel" => "magánrepülő"
    ],
    [
        "president" => "Frad Íliász",
        "country" => "Dotnetnia",
        "travel" => "vonat"
    ],
    [
        "president" => "Kutató Tamás",
        "country" => "Javasztán",
        "travel" => "légitársaság"
    ],
    [
        "president" => "Gregory Sinclair Dominic",
        "country" => "Holy Sea",
        "travel" => "magánrepülő"
    ],
    [
        "president" => "Szőrmók Tamás",
        "country" => "BFQ-unió",
        "travel" => "vonat"
    ],
    [
        "president" => "Zászló László",
        "country" => "Algoritmia",
        "travel" => "autó"
    ],
    [
        "president" => "Piros Péter",
        "country" => "Adatbázisztán",
        "travel" => "autó"
    ],
    [
        "president" => "Gregory Thomas",
        "country" => "Felsorolófölde",
        "travel" => "magánrepülő"
    ],
    [
        "president" => "Némeh Dévid",
        "country" => "R-public",
        "travel" => "autó"
    ],
    [
        "president" => "Peter Smith",
        "country" => "KöztárSageság",
        "travel" => "légitársaság"
    ]
];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Elso</title>
</head>
<body>
<style>
    .kornyezetbarat-1 {
        background-color: hsl(100, 50%, 25%);
    }

    .kornyezetbarat-2 {
        background-color: hsl(100, 50%, 45%);
    }

    .kornyezetbarat-3 {
        background-color: hsl(100, 50%, 65%);
    }

    .kornyezetbarat-4 {
        background-color: hsl(100, 50%, 85%);
    }
</style>
<table>
    <tr>
        <th>president</th>
        <th>country</th>
        <th>travel</th>

    </tr>
    <?php foreach ($leaders as $leader) {

            if (strcmp($leader['travel'], 'magánrepülő') == 0) {

            echo "<tr class ='kornyezetbarat-1'>";
            }
            if (strcmp($leader['travel'], 'autó') == 0) {


                echo "<tr class ='kornyezetbarat-2'>";
            }
            if (strcmp($leader['travel'], 'személyautó') == 0) {


                echo "<tr class ='kornyezetbarat-2'>";
            }
            if (strcmp($leader['travel'], 'légitársaság') == 0) {


                echo "<tr class ='kornyezetbarat-3'>";
            }

            if (strcmp($leader['travel'], 'vonat') == 0) {

                echo "<tr class ='kornyezetbarat-4'>";
            }


        ?>
            <td><?php echo $leader['president']; ?></td>
            <td><?php echo $leader['country']; ?></td>
            <td><?php echo $leader['travel']; ?></td>



        </tr>


    <?php } ?>
</table>
<p> Magánrepülővel utazott:
    <?php
    foreach ($leaders as $leader) {
        if (strcmp($leader['travel'], 'magánrepülő') === 0) {
            echo $leader['president'] . ", ";
        }
    }
    ?>
</p>


<p> Nem légi úton utazott:
<ul>
    <?php
    foreach ($leaders as $leader) {
        if (strcmp($leader['travel'], 'magánrepülő') !== 0 and strcmp($leader['travel'], 'légitársaság') !== 0) {
            echo "<li>" . $leader['country'] . "</li>";
        }
    }
    ?>
</ul>
</p>


</body>
</html>
