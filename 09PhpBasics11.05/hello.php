<?php

echo("hello world<br>");

$variable = 123;
$text = "asd";
$logical = true;

echo "Variable values: " . $variable . $text . $logical . "<br>";

//php documentation     https://www.php.net/

echo gettype($logical);

$array = [
    1, 2, 3, "asd", false,
];
echo "<br>";
echo $array; //not good


print_r($array); // nem mindig a legjobb

echo "<br>";

var_dump($array); //better

//oldfor
for ($i = 0; $i < count($array); $i++) {
    echo "<br>" . $array[$i] . "<br";
}
//foreach
foreach ($array as $elem) {
    if ($elem === false) {
        echo "False" . "<br>";
    } else {
        echo $elem . "<br>";
    }

}

//Php 8.0 new features

//objectum

$asszoc = [
    "key" => "value",
    "key2" => "value2",
    "3" => "v3"
];


echo $asszoc["key"];

echo "<br>";
echo "array for";
echo "<br>";
//foreach only value
foreach ($asszoc as $item) {
    echo $item . "<br>";
}

//kulcs érték-párok

echo "<br>" . "key-value";
foreach ($asszoc as $k => $e) {
    echo $k . "=>" . $e . "<br>";
}

echo "<br>";
print_r($asszoc);
echo "<br>";
var_dump($asszoc);


echo "<br>";
//asszoc tömb és tömb típusa ugyanaz a phpban


echo "<br>";

//php class osztálypéldánnyal

$obj = (object)$asszoc;

echo $obj->key;
echo "<br>";

$obj2 = [
    "nev" => "Bucsi",
    "foglalkozas" => "demi",
    "tulajdonsag" => "pontatlan",
    "targyak" => [
    "egyetem" => ["webprog", "web2"],
    "gimi" => ["info", "digcult"]
]
    ];


echo "<br>";

echo $obj2["targyak"]["egyetem"][0];


echo "<br>";
$obj3 = (object)[
    "nev" => "Bucsi",
    "foglalkozas" => "demi",
    "tulajdonsag" => "pontatlan",
    "targyak" => (object)[
        "egyetem" => ["webprog", "web2"],
        "gimi" => ["info", "digcult"]
    ]
];

echo $obj3->targyak->egyetem[0];