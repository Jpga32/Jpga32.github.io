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


const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
 const textMensagem = formulario.querySelector("#mensagem");
/* const textMensagem = formulario.querySelector("[name=mensagem]"); */

let quantidade = 100;   // Determina o valor maximo de caracteres

// Evento para detectaçao de entrada de dados (Digitação)
textMensagem.addEventListener("input", function(){
  console.log(textMensagem.value);

 // Criando o que for digitado   
let conteudo = textMensagem.value;

// criando uma contagem regressiva
let contagem = quantidade - conteudo.length;

// Adicionando contagem ao elemento
bCaracteres.textContent = contagem;

const limite = formulario.querySelector("#maximo")


if (contagem == 0) {
    bCaracteres.style.color = "red";
    textMensagem.style.boxShadow = "red 0px 0px 10px"
} else {
    bCaracteres.style.color = "black";
    textMensagem.style.boxShadow = "black 5px 5px 10px"

}

});

/* Progrmaçao do FormSpree */

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado por Enviar";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Eita! Deu Ruim ! Tente novamente mais tarde "
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)