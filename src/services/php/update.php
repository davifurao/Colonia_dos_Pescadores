<?php

$nome = $_POST['nome'];
$area = $_POST['area'];
$formacao = $_POST['formacao'];
$anos = $_POST['anos'];

$tempName = tempnam('.', '');

$temp = fopen($tempName, 'w');
$orig = fopen('usuarios.csv', 'r');
while (($row = fgetcsv($orig)) !== false) {
    if ($row[0] == $nome) {
        fputcsv($temp, [$nome, $area, $formacao, $anos]);
        continue;
    }
    fputcsv($temp, $row);
}
fclose($temp);
fclose($orig);

rename($tempName, 'usuarios.csv');

header('location: /');

?>