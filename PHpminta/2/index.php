<?php
$output = [];

function exists($key)
{
    return (isset($_GET[$key]));
}

if (exists(goblins) && is_numeric($_GET["goblins"]) && filter_var($_GET["goblins"], FILTER_VALIDATE_INT) && intval($_GET["goblins"]) > 0) {
    $goblins = $_GET["goblins"];
} else {
    $goblins = "";
    $output[] = "Ervenztelen goblin menyiseg";
}


if (exists(chief) && !preg_match("[\wà-úÀ-Ú]*\s[\wà-úÀ-Ú]*", $_GET["chief"])) {
    $chief = $_GET["chief"];
    $pieces = explode(' ', $chief);
    $last_word = array_pop($pieces);


    $ranks = ["goblinka", 'kisfőnök', 'nagyfőnök', 'főfőnök', 'törzsfő'];
    if (!in_array($last_word, $ranks)) {
        $output[] = $chief  .  " Érvénytelen rang! " . $last_word  ;
    } elseif ('goblinka' === $last_word || 'kisfőnök' === $last_word  ) {
        $output[] = "Túl alacsony rang!";
    }

} else {
    $goblins = "";
    $output[] = "Ervenytelen vezeto";
}


if (exists(shovels) ) {
    $shovels = $_GET["shovels"];

    if(intval($shovels)<intval($goblins)){
        $output[] = "Túl kevés ásó!";
    }
} else {
    $goblins = "";
    $output[] = "Érvénytelen ásó mennyiség!";
}

if(count($output)==0){
    if(intval($shovels)>=2*intval($goblins)){
        $output[] = "Gyorsan megszerezzük a kincset!";
    }else{
        $output[] = "Indulhat az akció!";
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
<ul>
    <?php foreach ($output as $o) { ?>
        <li>
            <?php echo $o; ?>
        </li>
    <?php } ?>
</ul>
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