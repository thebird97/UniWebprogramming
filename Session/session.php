<?php

session_start();
$counter = $_SESSION['counter'] ?? 0;
$counter += 1;
$_SESSION['counter'] = $counter;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Session</title>
</head>
<body>
     Counter value: <?php echo $counter; ?>
     <a href="session.php">Increment </a>
     <br>
     $_SESSION value: <?php var_dump($_SESSION); ?>

</body>
</html>