<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Опыт работы</title>
</head>
<body>
  <h1>Мой опыт работы</h1>

  <?php
$job = [
    [
        'name' => 'GB',
        'data' => '2023',
        'desc' => 'Творчество',
    ],
    [
        'name' => 'OSIRIS',
        'data' => '2014-2023',
        'desc' => 'Разная работа',
    ],
    [
        'name' => 'Студия Красоты',
        'data' => '1999-2020',
        'desc' => 'Креативная работа',
    ],
];
?>

<div class="w3-container w3-card w3-white w3-margin-bottom">
    <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Опыт работы</h2>

    <?php for ($i = 0; $i < count($job); $i++) { ?>
        <div class="w3-container">
            <h5 class="w3-opacity"><b><?php echo $job[$i]['name']; ?></b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i><?php echo $job[$i]['data']; ?></h6>
            <p><?php echo $job[$i]['desc']; ?></p>
            <?php if ($i < count($job) - 1) { ?>
                <hr>
            <?php } ?>
        </div>
    <?php } ?>

</div>

</body>
</html>
