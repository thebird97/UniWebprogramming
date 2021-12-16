<?php
function exists($key)
{
    return (isset($_POST[$key]));
}

echo "FULL ";
print_r($_POST);
echo "<br>";
$errors = [];
$result = [];
$colors = ["black", "grey", "multi", "white"];

if (count($_POST) > 0) {
    //jött be adat ellenőrzés szereroldalon
    //name check
    if (exists("name") && strlen(trim($_POST["name"]) > 0)) {
        $result["name"] = $_POST["name"];
    } else {
        $errors["name"] = "Name not okay ";

    }

    if (exists("age")) {
        if (is_int($_POST["age"] == 1) && intval($_GET["kor"] >= 0)) {
            $result["age"] = $_POST["age"];
        } else {
            $errors["age"] = "age not okay";
        }
    } else {
        $errors["age"] = "age is empty";
    }

    if (exists("color") && in_array($_POST["color"], $colors)) {
        $result["color"] = $_POST["color"];
    } else {
        $errors["age"] = "color error";
    }

    if (exists("sex") && in_array($_POST["sex"], ["m", "f"])) {
        $result["sex"] = $_POST["sex"];
    }
    if (exists("medical")) {
        if (in_array("neutered", $_POST["medical"])) {
            $result["neutered"] = false;
        } else {
            $result["neutered"] = true;
        }

        if (in_array("shots", $_POST["medical"])) {

            $result["neutered"] = true;
        } else {
            $result["neutered"] = false;
        }

    }

    //email check
    if (exists("email")) {
        if (filter_var($_POST["emial"], FILTER_VALIDATE_EMAIL)) {
            $result["email"] = $_POST["email"];
        } else {
            $errors["email"] = "Error in email";
        }
    } else {
        $errors["email"] = "No email address provided";
    }


}
echo "<br>";
print_r($errors);
echo "<br>";
print_r($result);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Space kitten's invasion</title>
</head>
<body>
Hello this is the cat page.

<form action="form.php" method="post">
    <label for="name">Cat name:</label>
    <input id="name" name="name" type="text">
    <br>
    <label for="age">Cat's age:</label>
    <input id="age" name="age" type="number" min="`" step="1">
    <br>
    Cat's color:
    <select name="color" id="color">
        <option value="black">Black</option>
        <option value="grey">Grey</option>
        <option value="multi">Multi color</option>
        <option value="white">White</option>
    </select>
    <br>
    <label for="sex">Kitten's sex;</label>
    <input type="radio" name="sex" id="male" value="m"><label for="male">Male</label>
    <input type="radio" name="sex" id="female" value="f"><label for="female">Female</label>
    <br>
    Medical statement:
    <input type="checkbox" name="medical[]" id="neutered" value="neutered"><label for="neutered">Neutered</label>
    <input type="checkbox" name="medical[]" id="shots" value="shots"><label for="shots">Shots</label>
    <br>
    E-mail:
    <input type="email" name="email">
    <br>
    <input type="submit" value="Send">
</form>

</body>
</html>