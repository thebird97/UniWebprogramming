<?php
$teams = json_decode(file_get_contents('data/teams.json'), true);
$matches = json_decode(file_get_contents('data/matches.json'), true);
$comments = json_decode(file_get_contents('data/comments.json'), true);
if (count($_GET) > 0) {
    $id = $_GET['id'];
} else {
    header("Location: index.php");
    die();
}

function findMatchesRelatedToTeam($id, $matches)
{
    $ThisTeamMatches = [];
    foreach ($matches as $key => $mvalue) {

        if ($mvalue["home"]["id"] === $id || $mvalue["away"]["id"] === $id) {
            // array_push($ThisTeamMatches,$mvalue["away"]["id"]);
            array_push($ThisTeamMatches, $mvalue);
            //$ThisTeamMatches  $mvalue["away"]["id"];
            //$ThisTeamMatches[] = $mvalue;
        }
    }
    return $ThisTeamMatches;

}

function ThisTeamComments($id, $comments)
{

    $ThisTeamComments = [];

    foreach ($comments as $ckey => $cvalue) {

        if ($cvalue["teamid"] === $id) {

            array_push($ThisTeamComments, $cvalue);
        }
    }
    return $ThisTeamComments;
}


?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <style>
        body {
            background-color: lightblue;
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
            list-style-type: none;
            background: darkcyan;
        }

        li {
            position: relative;
            padding-left: 11px;
            margin-bottom: 8px;
        }

        div {
            font-family: verdana;
            font-size: 20px;

        }

        table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
        }


    </style>
    <meta charset="UTF-8">
    <title>Csapatrészletek oldal</title>
</head>
<body>
<h1>Csapatrészletek oldal</h1>
<h2>Csapat neve</h2>
<div><?php echo $teams[$id]["name"] ?></div>
<h2>Csapat városa</h2>
<div><?php echo $teams[$id]["city"] ?></div>
<h2>Összes meccse (ki-kivel, mikor)</h2>
<div> A meccsek eredménye zöld színű, ha a csapat nyert, piros színű, ha a csapat vesztett, sárga döntetlen esetén.
</div>
<br>
<table>
    <tr>
        <th>Match Neve</th>
        <th>Ki</th>
        <th>Kivel</th>
        <th>Mikor</th>
        <th>Lejátszott match eredménye (A lejátszott meccseknél az eredmények is)</th>
    </tr>

    <?php $ThisTeamMatchess = findMatchesRelatedToTeam($id, $matches);
    foreach ($ThisTeamMatchess as $tkey => $tvalue) { ?>
        <tr>
            <td><?php echo $tvalue["id"]; ?></td>
            <td><?php echo $tvalue["home"]["id"]; ?></td>
            <td><?php echo $tvalue["away"]["id"]; ?></td>
            <td><?php echo $tvalue["date"]; ?></td>
            <?php if ($tvalue["home"]["score"] === "" && $tvalue["away"]["score"] === "") { ?>
                <td><?php echo "Még nem lejátszott match"; ?> </td>
            <?php } else if ($tvalue["home"]["score"] === $tvalue["away"]["score"]) { ?>
                <td style="background-color: yellow"><?php echo $tvalue["home"]["score"]; ?>
                    <b>-</b> <?php echo $tvalue["away"]["score"]; ?> </td>
            <?php } else if ($tvalue["home"]["score"] > $tvalue["away"]["score"]) { ?>
                <?php if (($tvalue["home"]["id"]) === $id) { ?>
                    <td style="background-color: green"><?php echo $tvalue["home"]["score"]; ?>
                        <b>-</b> <?php echo $tvalue["away"]["score"]; ?> </td>
                <?php } else { ?>
                    <td style="background-color: red"><?php echo $tvalue["home"]["score"]; ?>
                        <b>-</b> <?php echo $tvalue["away"]["score"]; ?> </td>
                <?php } ?>

            <?php } else if ($tvalue["home"]["score"] < $tvalue["away"]["score"]) { ?>
                <?php if (($tvalue["home"]["id"]) === $id) { ?>
                    <td style="background-color: red"><?php echo $tvalue["home"]["score"]; ?>
                        <b>-</b> <?php echo $tvalue["away"]["score"]; ?> </td>
                <?php } else { ?>
                    <td style="background-color: green"><?php echo $tvalue["home"]["score"]; ?>
                        <b>-</b> <?php echo $tvalue["away"]["score"]; ?> </td>
                <?php } ?>
            <?php } ?>
        </tr>
    <?php } ?>
</table>
<h2>Hozzászólások (ki, mit, mikor írt).</h2>
<ul>





    <?php $thiscomments = ThisTeamComments($id, $comments);

    foreach ($thiscomments as $tkey => $tvalue) { ?>
        <li>Ki kommentelt?  <b><?php echo $tvalue["author"]; ?></b></li>
        <li>A komment szövege: <?php echo $tvalue["text"]; ?></li>
        <li>Időpont: <?php echo $tvalue["date"]; ?></li>
        <hr>
        <br>
    <?php } ?>
</ul>
<br>
<h2>Új komment írása:</h2>


</body>
</html>

