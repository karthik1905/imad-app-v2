//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick=function() {
 // make req to counter endppint
 
 //capture the response and store it in a vaiable
 
 //render the variable in correct span
 counter = counter +1;
 var span= document.getElementById('count');
 span.innerHTML=counter.toString();    
};