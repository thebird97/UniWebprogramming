<?php
function letezik($kulcs)
{
    return (isset($_POST[$kulcs]));
}

$hibak = [];
$eredmeny = [];
var_dump($_POST);
if (count($_POST) > 0) {
    if (letezik("bdate")) {
        $date = date_parse($_POST['bdate']);
        if (checkdate($date['month'], $date['day'], $date['year'])) {
            // Valid Date
            $eredmeny["bdate"] = $_POST['bdate'];
        } else {
            $hibak["bdate"] = "bdate nem valid adtál meg dátumot!";
        }
    } else {
        $hibak["bdate"] = "Nem adtál meg  bdate dátumot!";
    }


    if (letezik("kdate")) {
        $datek = date_parse($_POST['kdate']);
        if (checkdate($datek['month'], $datek['day'], $datek['year'])) {
            // Valid Date
            $eredmeny["kdate"] = $_POST['kdate'];
        } else {
            $hibak["kdate"] = "kdate nem valid adtál meg dátumot!";
        }
    } else {
        $hibak["kdate"] = "Nem adtál meg  kdate dátumot!";
    }

    if(strtotime($_POST['bdate'])>strtotime($_POST['kdate'])){
        $hibak["elobb"] = "a jogosítvány kiállításának dátuma később van, mint a születési dátum (1 pont)";
    }


}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php if (count($hibak) > 0) { ?>
    <h1>Hibák: </h1>
    <ul>
    <?php foreach ($hibak as $hiba) { ?>
        <li><?php echo $hiba; ?></li>
    <?php } ?>
        </ul>
<?php }else{ ?>
    <h1>Eredmény: </h1>
<?php } ?>

<form method="post" action="elso.php">
    Születési dátum:
    <input type="date" name="bdate">
    <br>
    Jogosítvány kiállítva:
    <input type="date" name="kdate">
    <button type="submit">Send</button>
</form>
</body>
</html>
