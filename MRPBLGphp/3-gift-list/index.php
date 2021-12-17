<?php
$members = json_decode(file_get_contents('members.json'),true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gift list</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1>Gift list</h1>
  <h2>My family members</h2>

  <ul>
  <?php foreach ($members as $m ){  ?>
    <li>
   <?php   $memid = $m['id'];?>
       <a href="member.php?id=<?php echo $memid  ?>" > <?php echo $m["name"]  ?> </a>
    </li>
      <?php  } ?>
  </ul>
</body>
</html>