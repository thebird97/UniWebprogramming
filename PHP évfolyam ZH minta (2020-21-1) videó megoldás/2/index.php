<?php
$errors = [];
$output = [];

function letezik($kulcs)
{
    return (isset($_GET[$kulcs]));
}

/*
 * a. (2 pont) Amennyiben a goblins paraméter nem létezik, nem szám, nem
 * egész, vagy nem pozitív: Érvénytelen goblin mennyiség!
*/

$goblins = $_GET['goblins'] ?? '';
$chief = $_GET['chief'] ?? '';
$shovels = $_GET['shovels'] ?? '';

/*
 * a. (2 pont) Amennyiben a goblins paraméter nem létezik,
 *  nem szám, nem egész, vagy nem pozitív: Érvénytelen goblin mennyiség!
 */

if ($goblins === '' || !is_numeric($goblins) || filter_var($goblins, FILTER_VALIDATE_INT) === false || intval($goblins) < 1) {
    $errors['goblins'] = "Érvénytelen goblin mennyiség!";
} else {
    $output['goblins'] = $goblins;
}

/*
 * b. (1,5 pont) Amennyiben a chief paraméter nem létezik, vagy nincs benne legalább egy szóköz: Érvénytelen vezető!
 */
//legalább egy szókö
$ranks = ["goblinka", "kisfőnök", "nagyfőnök", "főfőnök", "törzsfő"];
$words = explode(' ', $chief);
if (!letezik('chief') || count($words) < 2) {
    $errors['chief'] = "Érvénytelen vezető!";
} else {

    if (!in_array($words[count($words) - 1], $ranks)) {
        $errors['chief'] = "Érvénytelen rang!";
    } else if (array_search($words[count($words) - 1], $ranks) < 2) {
        $errors['chief'] = "Túl alacsony rang!";
    } else {
        $output['chief'] = $chief;
    }
}


/*
 * c. (2 pont) Amennyiben a vezető rangja nem szerepel a
 * goblin rangok közt: Érvénytelen rang!, ha pedig nem éri el a nagyfőnök szintet: Túl alacsony rang!
A goblin rangok (legkisebbtől legnagyobbig):
goblinka, kisfőnök, nagyfőnök, főfőnök, törzsfő
 *
 */


/*
 * d. (1,5 pont) Amennyiben a shovels paraméter nem létezik,
 *  nem szám, nem egész, vagy negatív: Érvénytelen ásó mennyiség!,
 *  ha pedig kisebb, mint a goblinok száma: Túl kevés ásó! (ez utóbbit elég akkor megnézni,
 *  ha az ásók száma érvényes volt)
 *
 */
if (!letezik('shovels') || filter_var($goblins, FILTER_VALIDATE_INT) === false || !is_numeric($shovels) || intval($shovels) < 0) {
    $errors['shovels'] = "Érvénytelen ásó mennyiség!";
    if (intval($shovels) < intval($goblins)) {
        $errors['shovels'] = "Túl kevés ásó!";
    }
} else {
    $output['shovels'] = $shovels;
}

/*
 * e. (1 pont) Ha minden paraméter megfelelő: Indulhat az akció!,
 *  ha pedig legalább kétszer annyi ásó van, mint goblin:
 * Gyorsan megszerezzük a kincset!
 *
 */

if (count($errors) === 0) {
    if (intval($shovels) >= 2 * intval($goblins)) {
        $errors['end'] = "Gyorsan megszezzük a kincset!";
    } else {
        $errors['end'] = "Indulhat az akció!";
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2. feladat</title>
</head>
<body>
<h1>2. feladat</h1>

<h2>Üzenetek</h2>

<?php foreach ($errors as $error) { ?>
    <li> <?php echo $error; ?></li>
<?php } ?>

<h3>Sajat üzik</h3>
<?php foreach ($output as $o) { ?>
    <li> <?php echo $o; ?></li>
<?php } ?>

<h2>Próbalinkek</h2>
<a href="index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=7">
    <pre>index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=7</pre>
</a>
<a href="index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=10">
    <pre>index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=10</pre>
</a>
<a href="index.php">
    <pre>index.php</pre>
</a>
<a href="index.php?goblins=nemszám&chief=nincsszóköz&shovels=nemszám">
    <pre>index.php?goblins=nemszám&chief=nincsszóköz&shovels=nemszám</pre>
</a>
<a href="index.php?goblins=-5&chief=Snuch Nawdow nagyfőnök&shovels=10">
    <pre>index.php?goblins=-5&chief=Snuch Nawdow nagyfőnök&shovels=10</pre>
</a>
<a href="index.php?goblins=16.2&chief=Snuch Nawdow nagyfőnök&shovels=10">
    <pre>index.php?goblins=16.2&chief=Snuch Nawdow nagyfőnök&shovels=10</pre>
</a>
<a href="index.php?goblins=16&chief=Snuch Nawdow nagyfőnök&shovels=10">
    <pre>index.php?goblins=16&chief=Snuch Nawdow nagyfőnök&shovels=10</pre>
</a>
<a href="index.php?goblins=5&chief=Snuch Nawdow párttitkár&shovels=10">
    <pre>index.php?goblins=5&chief=Snuch Nawdow párttitkár&shovels=10</pre>
</a>
<a href="index.php?goblins=5&chief=Snuch Nawdow kisfőnök&shovels=10">
    <pre>index.php?goblins=5&chief=Snuch Nawdow kisfőnök&shovels=10</pre>
</a>
</body>
</html>