<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$method = $_SERVER['REQUEST_METHOD'];

require './vendor/autoload.php';
$app = new \Slim\App;

function getConn(){
    return new PDO('mysql:host=localhost;dbname=db_gestao', 'root', '',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
};  

$app -> post('/cadastrados','getCadastro');
$app -> get('/funcionarios','getFuncionarios');
$app -> post('/atualiza1/{id}','getTelefone');
$app -> post('/atualiza2/{id}','getSalario');
$app ->get('/demissao/{id}','getDemissao');

function getCadastro(Request $request, Response $response, array $args) {
    $user = $request->getParsedBody();
        $nome = $user['body']['name'];
        $sexo =  $user['body']['sexo'];
        $endereco = $user['body']['endereco'];
        $nascimento =  $user['body']['nascimento'];
        $num = $user['body']['num'];
        $cargo =  $user['body']['cargo'];
        $contrato =  $user['body']['contrato'];
        $salario =  $user['body']['salario'];
        $foto =  $user['body']['foto'];
        $desc =  $user['body']['desc'];
    if ($user == "" || $user == null){
        error_log();
    } else {
    $sql = "INSERT INTO tb_funcionario(nm_funcionario, cd_sexo, nm_endereco, dt_nasc, nu_telefone, nm_cargo, vl_salario, dt_contrato,img_foto,dc_descricao) 
    VALUES('$nome', '$sexo', '$endereco', '$nascimento', '$num', '$cargo', '$salario', '$contrato', '$foto','$desc')";
    $stmt = getConn()->query($sql);
    }
}
function getFuncionarios(Request $request, Response $response, array $args) {
    $sql = "SELECT * FROM tb_funcionario";
    $stmt = getConn()->query($sql);
    $usuario = $stmt -> fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($usuario));
    return $response;
}
function getDemissao(Request $request, Response $response, array $args){
    $id = $args['id'];
    $conn = getConn();
    $sql = "DELETE FROM tb_funcionario WHERE id_funcionario=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam('id',$id);
    $stmt->execute();
    return $response;
};
function getTelefone(Request $request, Response $response, array $args){
    $id = $args['id'];
    $novoTelefone = $request->getParsedBody();
    var_dump($novoTelefone);
    $novoTelefone = $novoTelefone['telefone'];
    $conn = getConn();
    $sql = "UPDATE tb_funcionario SET nu_telefone = '$novoTelefone' WHERE id_funcionario = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam('id', $id);
    $stmt->execute();
    return $response;
};
function getSalario(Request $request, Response $response, array $args){
    $id = $args['id'];
    $novoSalario = $request->getParsedBody();
    var_dump($novoSalario);
    $novoSalario = $novoSalario['salario'];
    $conn = getConn();
    $sql = "UPDATE tb_funcionario SET vl_salario = '$novoSalario' WHERE id_funcionario = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam('id', $id);
    $stmt->execute();
    return $response;
};


$app->run();

