// Acesso a funcionalidade do AJAX

/*

var xhr = new XMLHttpRequest
var dados = {};

xhr.open('GET', 'https://api.github.com/users/httpLucasReis');
xhr.send(null);

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
      console.log(JSON.parse(xhr.responseText))
  }
}

*/

// Promise

var minhaPromise = function(){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/httpLucasReis');
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        if(xhr.status == 200){
           resolve(JSON.parse(xhr.responseText));
        } else {
           reject('Erro na requisão');
        }

      }
    }
 })
}

minhaPromise()
  .then(function(response){
      console.log(response);
  })
  .catch(function(error){
      console.log(error);
  });
