<?php
$activities = [
    1 => [
        "name" => "alvás",
        "difficulty" => 0.05
    ],
    2 => [
        "name" => "bányászás",
        "difficulty" => 0.6
    ],
    3 => [
        "name" => "család",
        "difficulty" => 0.4
    ],
    4 => [
        "name" => "programozás",
        "difficulty" => 0.95
    ],
    5 => [
        "name" => "zsákmányolás",
        "difficulty" => 0.7
    ],
    6 => [
        "name" => "vadászat",
        "difficulty" => 0.6
    ],
    7 => [
        "name" => "játék",
        "difficulty" => 0.0
    ],
    8 => [
        "name" => "főzés",
        "difficulty" => 0.6
    ]
];
$goblins = [
    "WEB'LIN" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 5
        ],
        [
            "startHour" => 4,
            "activityKey" => 4
        ],
        [
            "startHour" => 5,
            "activityKey" => 4
        ],
        [
            "startHour" => 7,
            "activityKey" => 1
        ]
    ],
    "HUN'TER" => [
        [
            "startHour" => 0,
            "activityKey" => 1
        ],
        [
            "startHour" => 1,
            "activityKey" => 6
        ],
        [
            "startHour" => 3,
            "activityKey" => 3
        ],
        [
            "startHour" => 4,
            "activityKey" => 3
        ],
        [
            "startHour" => 5,
            "activityKey" => 6
        ],
        [
            "startHour" => 7,
            "activityKey" => 6
        ]
    ],
    "MOT'HER" => [
        [
            "startHour" => 0,
            "activityKey" => 3
        ],
        [
            "startHour" => 1,
            "activityKey" => 3
        ],
        [
            "startHour" => 3,
            "activityKey" => 6
        ],
        [
            "startHour" => 4,
            "activityKey" => 8
        ],
        [
            "startHour" => 5,
            "activityKey" => 8
        ],
        [
            "startHour" => 7,
            "activityKey" => 3
        ]
    ],
    "GOB'KID" => [
        [
            "startHour" => 0,
            "activityKey" => 7
        ],
        [
            "startHour" => 1,
            "activityKey" => 7
        ],
        [
            "startHour" => 3,
            "activityKey" => 7
        ],
        [
            "startHour" => 4,
            "activityKey" => 7
        ],
        [
            "startHour" => 5,
            "activityKey" => 7
        ],
        [
            "startHour" => 7,
            "activityKey" => 7
        ]
    ]
];


function findActivityNamee($data, int $hour,$activities)
{
    //global $actities;
  foreach ($data as $d){
     if($d['startHour'] == $hour){
         return $activities[$d["activityKey"]]["name"];
     }
  }
    return '';
}

function findActivityColorr_withArrayfunction($data, int $hour,$activities){
    ///kiválogatásból -> belső tömb
}


function findActivityColorr($data, int $hour,$activities)
{
    //global $actities;
    foreach ($data as $i){
        if($i['startHour'] == $hour){
          $d =  $activities[$i["activityKey"]]["difficulty"];
          if($d<0.5){return "lightgreen";}
          if($d<=0.8){return "orange";}
          return "red";
        }
    }
    return "white";
}

?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1. feladat</title>
    <style>
        table, td, th {
            border: 1px black solid;
            border-collapse: collapse;
        }

        td {
            text-align: center;
        }
    </style>
</head>

<body>
<h1>1. feladat</h1>
<h2>Időbeosztás</h2>

<table>
    <tr>
        <th>ÓRA</th>
        <?php foreach ($goblins as $gname => $gdata) { ?>
            <th> <?php echo $gname ?></th>
        <?php } ?>
    </tr>
    <?php
    for ($hour = 0; $hour < 8; $hour++) { ?>
        <tr>
            <td><?php echo $hour ?></td>
            <?php foreach ($goblins as $gname => $gdata) { ?>
                <td style="background-color: <?php  echo findActivityColorr($gdata,$hour,$activities) ?>" ><?php echo findActivityNamee($gdata,$hour,$activities);  ?></td>
            <?php } ?>
        </tr>
    <?php } ?>
</table>
</body>

</html>