const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");


botaoLocalizar.addEventListener("click", function (event) {
    event.preventDefault();

    //Pegar  o cep digitado

    let Cep = inputCep.value;     // usamos o value para pegar determinada variavel

    /* Cep no Padrão da API */
    let url = `https://viacep.com.br/ws/${Cep}/json/`;  // Template String

/* Ajax: Comunicaçao assincrona com a viacep usando a fumçao
chamada de fetch. */

// 1) Fazer A Conexão com a API (Ou Acessar)
fetch(url)

    // 2) Recupere a respostas do acesso no formato JSON
    .then(resposta => resposta.json())

        // 3) E então, Mostreos dados
        .then(dados => {
         if ("erro" in dados) {
             bStatus.innerHTML = "CEP não Encontrado!";
             inputCep.focus();
         } else {
             bStatus.innerHTML = "CEP Encontrado";
             inputEndereco.value = dados.logradouro;
             inputBairro.value = dados.Bairro;
             inputCidade.value = dados.localidade;
             inputEstado.value = dados.uf;
         }
        });
});

VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99) 9999-9999");