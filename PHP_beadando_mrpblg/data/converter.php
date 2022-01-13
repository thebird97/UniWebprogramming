<?php
echo("start");
$teams = [
    'teamid1' => [
        'id' => 'teamid1',
        'name' => 'Team #1',
        'city' => 'City #1'
    ],
    'teamid2' => [
        'id' => 'teamid2',
        'name' => 'Team #2',
        'city' => 'City #2'
    ]
];
$matches = [
    'matchid1' => [
        'id' => 'matchid1',
        'home' => [
            'id' => 'teamid1',
            'score' => '2'
        ],
        'away' => [
            'id' => 'teamid2',
            'score' => '1'
        ],
        'date' => '2021-11-11'
    ]
];
$users = [
    'userid1' => [
        'id' => 'userid1',
        'username' => 'user1',
        'email' => 'email1'
    ],
    'userid2' => [
        'id' => 'userid2',
        'username' => 'user2',
        'email' => 'email1'
    ]
];
$comments = [
    'commentid1' => [
        'author' => 'userid1',
        'text' => 'Hajrá fiúk!',
        'teamid' => 'teamid1',
    ],
    'commentid2' => [
        'author' => 'userid2',
        'text' => 'Jó volt a legutóbbi meccs!',
        'teamid' => 'teamid1',
    ],
];


file_put_contents('teams.json', json_encode($teams, JSON_PRETTY_PRINT));
file_put_contents('matches.json', json_encode($matches, JSON_PRETTY_PRINT));
file_put_contents('users.json', json_encode($users, JSON_PRETTY_PRINT));
file_put_contents('comments.json', json_encode($comments, JSON_PRETTY_PRINT));
echo("convert okay");

?>