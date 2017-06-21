var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
 title : ' article one |karthik D',
 heading : ' article one',
 date : ' june 20 2017' ,
 content : `
 <p>
            this is   the content of the article    </p>`
};

function createtemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;


var htmltemplate = `

<html>

 <head>
    
  <title>
      ${title} 
  </title>
  <meta name="viewport" content="width-device-width, initial-scale=1"/>
 </head>
     <link href="/ui/style.css" rel="stylesheet" />
<body>
    <div class="container">
       
       <div>
            <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
       ${heading}
    </h3>
    <div>
        ${date}
    </div>
      ${content}
    </div>
 </body>
</html>


`;
return htmltemplate ;
}
app.get('/',function(req,res) {
res.sendfile(path.join(__dirname , 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
  counter = counter +1;
  res.send(counter.toString());
});
 app.get('/article-one',function(req,res){
     res.send(createtemplate(articleone))
 });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit-name' ,function(req,res){
    var name= req.query.name;

    names.push(name);

    res.send(JSON.stringify(names));
})


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
