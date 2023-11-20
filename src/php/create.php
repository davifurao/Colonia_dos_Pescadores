<?php

header("Access-Control-Allow-Origin: *");

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$datadenascimento = $_POST['datadenascimento'];
$foto = $_POST['foto'];
$telefone = $_POST['telefone'];
$rg = $_POST['rg'];
$titulo = $_POST['titulo'];
$nis = $_POST['nis'];
$comprovante = $_POST['comprovante'];

//$fp = fopen('usuarios.csv', 'r');
//while (($row = fgetcsv($fp)) !== false); {
 //   if ($row[1] == $cpf) {
 //       http_response_code(400);
  //      echo "CPF já cadastrado";
   //     exit();
    //}
//}

//$fp = fopen('usuarios.csv', 'a');
//fputcsv($fp, [$nome, $cpf, $datadenascimento, $foto, $telefone, $rg, $titulo, $nis, $comprovante]);

$servername = "localhost:3306";
$username = "root";
$password = "35458453aA@";
$dbname = "ITAPISSUMA_BANK";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (name, cpf) VALUES ('$nome' , '$cpf')";


if ($conn->query($sql) == TRUE) {
    echo "Cadastrado com Sucesso!!!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


//http_response_code(200);
//header('location: localhost:3000');

?>