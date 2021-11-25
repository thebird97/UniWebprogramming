<?php
$cegek = [
    (object)[
        'nev' => 'Webprogramozás Oktatás Kft.',
        'leiras' => 'PHP oktatás egyetemi hallgatóknak',
        'szekhely' => 'Budapest',
        'bevetel' => 'Állami fenntatás',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Tamás',
                'fizetes' => 10000
            ],
            (object)[
                'nev' => 'Mihály',
                'fizetes' => 20000
            ]
        ],
        'alapitva' => 1997
    ],
    (object)[
        'nev' => 'Vector Media',
        'leiras' => 'Nikon kamerák Canon objektívekkel',
        'szekhely' => 'Érd',
        'bevetel' => 'Bankártyás fizetések',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Viktor',
                'fizetes' => 15000
            ]
        ],
        'alapitva' => 1996
    ],
    (object)[
        'nev' => 'Gábor Tábor',
        'leiras' => 'Kiskorúak táboroztatása',
        'szekhely' => 'Tapolca',
        'bevetel' => 'A gyerekek ebédpénze',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Gábor',
                'fizetes' => 8000
            ]
        ],
        'alapitva' => 2000
    ],
    (object)[
        'nev' => 'Fent az Auron',
        'leiras' => 'Sífelszerelés',
        'szekhely' => 'Etyek',
        'bevetel' => 'Nemzeti Síelési Tartalék',
        'alkalmazottak' => [
            (object)[
                'nev' => 'Ákos',
                'fizetes' => 11000
            ],
            (object)[
                'nev' => 'Áron',
                'fizetes' => 12000
            ],
            (object)[
                'nev' => 'Gergő',
                'fizetes' => 13000
            ]
        ],
        'alapitva' => 1999
    ]
];

function summa($s, $x){
    return $s + $x->fizetes;
}

    function avarange_salaray($alk){
      return  $sum = array_reduce($alk, "summa",0) / count($alk);


    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<table>
    <th>Company name</th>
    <th>Company description</th>
    <th>Company HQ</th>
    <th>Income source</th>
    <th>Employee data</th>
    <th>Avarange salary</th>
    <th>Age of the company</th>

    <?php foreach ($cegek as $ceg) { ?>
        <tr>
            <td><?php echo $ceg->nev; ?></td>
            <td><?php echo $ceg->leiras; ?></td>
            <td><?php echo $ceg->szekhely; ?></td>
            <td><?php echo $ceg->bevetel; ?></td>
            <td>
                <?php
                foreach ($ceg->alkalmazottak as $a){?>
                <ul>
                    <li> <?php echo $a->nev ?> </li>
                    <li> <?php echo $a->fizetes ?> </li>
                </ul>

               <?php }  ?>

            </td>
            <td><?php echo avarange_salaray($ceg->alkalmazottak); ?> </td>
            <td><?php echo intval(date('Y'))-$ceg->alapitva;  ?></td>
        </tr>
    <?php } ?>
</table>

</body>
</html>
