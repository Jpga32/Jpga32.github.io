<?php   require "includes/topo.php"  ?>

        <article class="campo">

            <label for="produto">Nome do Produto:</label>
            <input type="text" id="produto" name="produto">

        </article>

        <article class="campo">

            <p>Selecione um fabricante :</p>
            <select>

                <?php
                $fabricantes = ["", "Samsung", "Asus", "LG", "Apple", "Motorola"];
                ?>

                <?php
                foreach ($fabricantes as $fabricante) {

                ?>
                    <option> <?= $fabricante ?> </option>
                <?php
                }
                ?>

            </select>
        </article>

        <article class="campo">

            <label for="valor" >Informe valor: R$ </label>
            <input type="number" id="valor" name="valor" min="100" step=".01" max="10000" placeholder=" Ex: 100,05">

        </article>


        <article class="campo">

            <label for="QNT">Informe Quatidade:</label>
            <input type="number" name="QNT" id="QNT" min="1" max="50" placeholder="Ex: 10">
        </article>

        <article class="campo">
            <label for="descricao">Descrição</label>
            <textarea name="descricao" id="msg" cols="30" rows="5"></textarea>

        </article>

        <button class="botao" type="submit">Adicionar a rede</button>

  <?php require "includes/roda_pe.php"  ?>