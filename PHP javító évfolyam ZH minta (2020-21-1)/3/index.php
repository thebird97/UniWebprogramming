<?php
$teachers = json_decode(file_get_contents('teachers.json'), true);
/*
 * e. (1 pont) A "Free capacity" linkre kattintva csak azokat a tanárokat listázd ki, akiknek
 * a vállalt óraszáma nagyobb, mint a jelenleg hozzárendelt órák száma!
 */

if (isset($_GET['filter'])) {
    if($_GET['filter']==="free"){
        $teachers = array_filter($teachers, function ($t) {
            return $t['maxcount'] > count($t['practices']);
        });
    }else if($_GET['filter']==="over"){
        $teachers = array_filter($teachers, function ($t) {
            return $t['maxcount'] < count($t['practices']);
        });
    }
}else{
    $teachers = json_decode(file_get_contents('teachers.json'), true);
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teachers</title>
</head>
<body>
<h1>Teachers</h1>
<h2>List of teachers</h2>
<p>
    <a href="?filter=free">Free capacity</a>
    <a href="?filter=over">Capacity overflow</a>
    <a href="?">All teachers</a>
</p>
<ul>
    <li>
        <b>Example Teacher</b> <br>
        <small>
            Practice11, Practice22
            (Max: 2)
        </small>
    </li>
    <?php
    foreach ($teachers as $teacher) { ?>
    <li>

        <a href="modify.php?id=<?php echo $teacher['id']; ?>"><b> <?php echo $teacher["name"]; ?></b> <br></a>
        <small>
            <?php echo implode(',', $teacher['practices']); ?>
            (Max:<?php echo $teacher["maxcount"]; ?>)
        </small>
    </li>
    <?php } ?>


</ul>
</body>
</html>