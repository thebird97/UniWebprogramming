<?php

$treasures = json_decode(file_get_contents('treasure.json'),true);

if(count($_POST)>0){
    $keeper = false;
    var_dump($_POST["keep"]);
    if($_POST["keep"]=="yes"){$keeper=true;}else{$keeper = false;}


    $data = [
            "name"  => $_POST["name"],
            "value"  => intval($_POST["value"]),
            "color"  => $_POST["color"],
            "keep"  => $keeper
    ];
   // var_dump($data);
    $treasures[] = $data;

}

file_put_contents('treasure.json',json_encode($treasures,JSON_PRETTY_PRINT));


?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3. feladat</title>
</head>
<body>
  <h1>3. feladat</h1>

  <h2>Űrlap</h2>
  <form method="post">
      <label for="tname">Kincs neve</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="value">Kincs erteke</label><br>
      <input type="number" id="value" name="value">
      <br>
      <label for="color">Kincs szine</label><br>
      <select  id="color" name="color">
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
      <br>
      <label for="keep">Megtart</label><br>
      <input type="radio" name="keep" value="yes">Yes <br>
      <input type="radio" name="keep" value="no">No <br>
      <br>
      <input type="submit" name="Kuld">

  </form>

  <h2>Kincslista</h2>
    <table>
        <th>Nev</th>
        <th>Ertek</th>
        <th>Szin</th>
        <th>Megtartjuk?</th>
        <?php foreach ($treasures as $id => $t) {?>
            <tr>

                <td>  <?php echo $t["name"]  ?>  </td>
                <td>  <?php echo $t["value"]  ?>  </td>
                <td>  <?php echo $t["color"]  ?>  </td>
                <td>  <?php echo $t["holdit"] ? "Megtartjuk" :  "Eladomanyozzuk";  ?>  </td>
                <td> <a href="delete.php?id<?php echo $id ?>">Torol</a></td>

            </tr>
        <?php }?>
    </table>

</body>
</html>