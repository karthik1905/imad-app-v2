//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick=function() {
 // make req to counter endppint
  var request = new XMLHttpRequet();
 
 //capture the response and store it in a vaiable
  request.onreadystatechange =  function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if(request.status == 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
 
 //make request 
 request.open('GET', 'http://karthik1905.imad.hasura-app.io/counter',true);
 request.send(null);
};
 //submit none
 var nameINput= document.getElementById('name');
var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function() {
   var names =['name1' , ' name2' , 'name3' , 'name4'];
   var list ='';
   for (var i=0; i<names.length ; i++)
   {
       list+='<li>' + names[i] + '<li>';
   }
   var ul = document.getElementById('namelist');
   ul.innerHTML = list;
 };