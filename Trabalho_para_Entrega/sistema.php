<?php  require "includes/header-sistema.php" ?>

    <?php
    if (empty($_POST["produto"]) || empty($_POST["valor"])) {
    ?>
        <p style="color:crimson;font-weight: bold;">Por favor preencha nome do produto e selecione o valor !</p>

        <p><a href="index.php">Voltar</a></p>

        <?php
    }else{

      
        $valor =   $nome = $_POST["produto"];$_POST["valor"];
        $quantidade = $_POST["QNT"];
        $descricao = $_POST["descricao"];

        ?>



        <h2>Dados Cadastrados no Sistema:</h2>
        <ul>
            <li> Nome do produto: <?= $nome ?></li>
            <li> R$<?= $valor ?></li>
            <li> Quantidade: <?= $quantidade ?></li>
            <li> Descrição: <?= $descricao ?></li>
        </ul>

        <p><a href="index.php">Cadastrar mais itens</a></p>  

    <?php
    }
    ?>
<?php  require "includes/roda_pe.php" ?>