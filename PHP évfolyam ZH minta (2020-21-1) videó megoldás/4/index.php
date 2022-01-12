<?php
/*
 * a. (1 pont) Az oldal betöltésekor (és minden újratöltéskor) jelenjen meg ez a táblázat, és
 *  (a fejlécen kívül) egy sort tartalmazzon: a betöltés időpontját és a kezdőegyenleget.
 * (Figyelem! A kezdőegyenleg nem minden betöltéskor
 *  10g 0s, ugyanis korábban már létrejöhetett a munkamenet és megváltoztathattu
 * k a későbbi feladatokban. Ld. következő feladatok!)
 *
 */
//10 AU = 120 AG
session_start();
if (!isset($_SESSION['silver']))
    $_SESSION['silver'] = 120;
$silver = $_SESSION['silver'];
?>


<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4. feladat</title>
</head>
<body>
<h1>4. feladat</h1>

<h2>Új tranzakció</h2>
Arany: <input type="number" id="gold" min="0" max="99" step="1" value="0"><br>
Ezüst: <input type="number" id="silver" min="0" max="11" step="1" value="0"><br>
<button id="income">Bevétel</button>
<button id="spend">Kiadás</button>

<h2>Tranzakciós napló</h2>
<table>
    <tr>
        <th>Időpont</th>
        <th>Egyenleg</th>
    </tr>
    <tr>
        <td> <?php echo date("Y.m.d. H:i:s"); ?> </td>
        <td> <?php echo floor($silver / 12); ?> g <?php echo $silver % 12; ?>s</td>
    </tr>
</table>
<script src="ajax.js"></script>
</body>
</html>