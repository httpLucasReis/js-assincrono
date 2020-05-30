// Acesso a funcionalidade do AJAX
var xhr = new XMLHttpRequest
var dados = {};

xhr.open('GET', 'https://api.github.com/users/httpLucasReis');
xhr.send(null);

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
      console.log(JSON.parse(xhr.responseText))
  }
}


