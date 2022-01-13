<?php
$array = json_decode(file_get_contents('data.json'), true);
//var_dump($array);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nyomda</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
<h1>Nyomda</h1>

<h2>Még nem nyomtatva</h2>

<ul>
    <?php foreach ($array as $key => $item) { ?>
        <?php if ($item["printed"] === false) { ?>

            <li>
                <a href="details.php?id=<?php echo $item["id"]; ?>">  <?php echo $item["name"]; ?>(<?php echo $item["taj"]; ?>)</a>
            </li>
        <?php } ?>
    <?php } ?>
</ul>
<h2>Nyomtatva</h2>
<ul>
    <?php foreach ($array as $key => $item){ ?>
    <?php if ($item["printed"] === true){ ?>
    <li>
      <a href="details.php?id=<?php echo $item["id"]; ?>">  <?php echo $item["name"]; ?>(<?php echo $item["taj"]; ?>) </a>
    </li>
        <?php } ?>
    <?php } ?>
</ul>


</body>
</html>