// JS é uma linguagem de programação

    // Ligando o HTML ao JS

    var nome = document.querySelector("#nomeinput");
    var mensagem = document.querySelector("#textorecado");


        // Escutando um evento

     document.getElementById("btn-enviar").addEventListener("click", enviaComentario)
    


function enviaComentario(){
  if (nome.value != null &&  mensagem.value != null){
    alert("Obrigada pela sua mensagem")


  }
}