<?php
    $counter = $_COOKIE['counter'] ?? 0;
    $counter += 1;
    setcookie('counter',$counter);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cookie</title>
</head>
<body>
     Counter value: <?php echo $counter; ?>
     <a href="index.php">Increment </a>
     <br>
     Cookie value: <?php var_dump($_COOKIE); ?>

</body>
</html>