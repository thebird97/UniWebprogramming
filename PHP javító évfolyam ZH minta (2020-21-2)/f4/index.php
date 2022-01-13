<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Helyben fogyasztás</title>
</head>
<body>
    <h1>Helyben fogyasztás</h1>
    <table id="people">
        <tr>
            <th>TERASZ <button id="tp">+1</button> <button id="tm">-1</button></th>
            <th>BELTÉR <button id="bp">+1</button> <button id="bm">-1</button></th>
        </tr>
        <tr>
            <td> <span id="out"> 0 </span></td>
            <td> <span id="in"> 0 </span></td>
        </tr>
    </table>
    <span id="error"></span>

    <h2>Napló</h2>
    <table id="log">
        <thead>
            <tr>
                <th>Időpont</th>
                <th>Esemény</th>
                <th>Terasz</th>
                <th>Beltér</th>
            </tr>
        </thead>
    </table>
    
    <script src="ajax.js"></script>
</body>
</html>
