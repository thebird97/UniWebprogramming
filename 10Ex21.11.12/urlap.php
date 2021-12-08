<?php
        function post_exists(){
            return (isset($_POST) && count($_POST)>0);
        }
        if(post_exists()){
           echo $_POST["name"];
        }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Space kitten's invasion</title>
</head>
<body>
<form action="urlap.php" method="post">
    <label for="name">Cat name:</label>
    <input id="name" name="name" type="text">
    <br>
    <label for="age">Cat's age:</label>
    <input id="age" name="age" type="number">
    <br>
    <input type="submit" value="Send">
</form>

</body>
</html>