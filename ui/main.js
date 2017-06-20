//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick=function() {
 // make req to counter endppint
  var request = new XMLHTTPRequet();
 
 //capture the response and store it in a vaiable
  request.onreadystatechange =  function() {
      if(request.readyState === XMLHTTPRequest.DONE) {
          //take some action
          if(request.status == 200) {
              var counter = request .responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
 
 //make request 
 request.open('GET', 'http://karthik1905.imad.hasura-app.io/counter',true);
 request.send(null);
};