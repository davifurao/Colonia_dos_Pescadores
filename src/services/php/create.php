<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: text/csv");
header("Content-Disposition: attachment; filename=usuarios.csv");

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$datadenascimento = $_POST['datadenascimento'];
$foto = $_POST['foto'];
$telefone = $_POST['telefone'];
$rg = $_POST['rg'];
$titulo = $_POST['titulo'];
$nis = $_POST['nis'];
$comprovante = $_POST['comprovante'];

$fp = fopen('usuarios.csv', 'r');
while (($row = fgetcsv($fp)) !== false); {
    if ($row[1] == $cpf) {
        http_response_code(400);
        echo "CPF já cadastrado";
        exit();
    }
}

$fp = fopen('usuarios.csv', 'a');
fputcsv($fp, [$nome, $cpf, $datadenascimento, $foto, $telefone, $rg, $titulo, $nis, $comprovante]);

http_response_code(302);
header('location: /');

?>