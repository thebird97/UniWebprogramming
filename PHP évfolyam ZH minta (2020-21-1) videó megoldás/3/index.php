<?php


function letezik($kulcs)
{
    return (isset($_GET[$kulcs]));
}

$treasures = json_decode(file_get_contents("treasures.json"), true);


$hibak = [];


$colors = ["piros", "narancs", "sarga", "zold", "kek", "lila"];
if (count($_POST) > 0) {
    $eredmeny = [
        "name" => $_POST["name"],
        "value" => intval($_POST["value"]),
        "color" => $_POST["color"],
        "keep" => ($_POST["keep"] == "yes")

    ];

    /*
     * e. (2 pont) Oldjuk meg, hogy ha az űrlapon már l
     * étező nevű kincset adunk meg, csak frissítsük annak adatait, ne adjuk hozzá újra!
     * */
    $filtered = array_filter($treasures, function ($t) use ($eredmeny) {
        return $t['name'] == $eredmeny['name'];
    });
    if(count($filtered)===0){
        $treasures[] = $eredmeny;
    }else{
        $treasures[array_keys($filtered)[0]] = $eredmeny;
    }

    file_put_contents("treasures.json", json_encode($treasures, JSON_PRETTY_PRINT));
}

if (isset($_GET['id'])) {
    $treasures = json_decode(file_get_contents("treasures.json"), true);
    unset($treasures[$_GET['id']]);
    file_put_contents("treasures.json", json_encode($treasures, JSON_PRETTY_PRINT));

}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3. feladat</title>
</head>
<body>
<h1>3. feladat</h1>

<h2>Űrlap</h2>
<!-- a. (1 pont) Az oldalra érkezve jelenjen meg egy űrlap, amely minden szükséges mezőt tartalmaz! -->
<form action="index.php" method="post">
    <label for="name">Kincs neve: </label>
    <input id="name" name="name" type="text">
    <br>
    <label for="value">Kincs értéke: </label>
    <input id="value" name="value" type="number" min="0" step="1">
    <br>
    <label for="color">Kincs színe:</label>
    <select name="color" id="color">
        <?php foreach ($colors as $color) { ?>
            <option value="<?php echo $color; ?>"> <?php echo $color; ?> </option>
        <?php } ?>
    </select>
    <br>
    <label for="keep">Megtartjuk?</label> <br>
    <input type="radio" name="keep" value="yes">Igen
    <input type="radio" name="keep" value="no">Nem
    <br>
    <input type="submit" value="Küldés">
</form>
<h2>Kincslista</h2>
<!--
c. (1,5 pont) Az űrlap alatt listázódjanak az eddigi kincsek minden adatukkal.
Ez a lista/táblázat minden oldalbetöltéskor jelenjen meg, azaz akkor is, amikor először érkezünk
az oldalra, és akkor is, amikor az űrlapot elküldtük és adatait sikeresen mentettük!*/
-->
<table>
    <tr>
        <th>Név</th>
        <th>Érték</th>
        <th>Szín</th>
        <th>Megtartjuk?</th>
        <th></th>
    </tr>
    <?php foreach ($treasures as $id => $treasure) { ?>
        <tr>
            <td><?php echo $treasure['name'] ?></td>
            <td><?php echo $treasure['value'] ?></td>
            <td><?php echo $treasure['color'] ?></td>
            <td><?php if ($treasure['keep'] == 1) {
                    echo "Megtartjuk";
                } else {
                    echo "Eladományozzuk";
                } ?></td>
            <td><a href="index.php?id=<?= $id;?>">Töröl</a> </td>
        </tr>
    <?php } ?>
</table>

</body>
</html>