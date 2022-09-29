window.onscroll = function () { myFunction() };

      var bar = document.getElementById("bar");

      var sticky = bar.offsetTop;

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          bar.classList.add("sticky")
        } else {
          bar.classList.remove("sticky");
        }
      }      

function Enviar() {

    var nome = document.getElementById("nome");
    var fone = document.getElementById("tel");
    var mail = document.getElementById("email");
    var text = document.getElementById("text");

   if (text.value == "") {

    } else if (mail.value == ""){

    } else if (fone.value == ""){

    } else if  (nome.value == ""){

    } else{
        alert('Obrigado Sr(a) ' + nome.value + ', a sua mensagem foi enviada com sucesso');
    }

}