<?php

$array = json_decode(file_get_contents('data.json'), true);
if(count($_GET)>0){
  $id =  $_GET['id'];
  //echo $id;

}else{
    die('no id');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Részletek</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1>Részletek</h1>
  <div id="card">
    <span id="id"> <?php echo $array[$id]["id"]; ?></span>
    <span id="name">  <?php echo  $array[$id]["name"]; ?></span>
    <span id="taj"><?php echo  $array[$id]["taj"]; ?></span>
    <span id="vaccine"><?php echo  $array[$id]["vaccine"]; ?></span>
    <span id="time_of_vaccination"><?php echo  $array[$id]["time_of_vaccination"]; ?></span>
  </div>
  <?php if ($array[$id]["printed"] === false) { ?>
      <?php   $array[$id]["printed"]=true;
      file_put_contents('data.json', json_encode($array, JSON_PRETTY_PRINT));
      ?>
      <a href="index.php" class="print">Nyomtatás</a>

   <?php } ?>

</body>
</html>