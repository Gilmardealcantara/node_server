var router = require('./router');
var app = router(3412);

var operators = [
    {name: "Oi", code: "14", category: "Cellphone", cost: 2},
    {name: "Vivo", code: "15", category: "Cellphone", cost: 1},
    {name: "Tim", code: "41", category: "Cellphone", cost: 3},
    {name: "claro", code: "31", category: "Cellphone", cost: 2},
    {name: "GVT", code: "25", category: "Phone", cost: 4},
    {name: "Embratel", code: "21", category: "Phone", cost: 3},
]

var contacts = [
    {name: "Pedro", phone: "31983025901", date: new Date(), color: 'blue', operator:  {name: "Oi", code: "14", category: "Cellphone", cost: 2}},
    {name: "Ana", phone: "31983025999", date: new Date(), color: 'red', operator:   {name: "Vivo", code: "15", category: "Cellphone", cost: 1}},
    {name: "Maria", phone: "31983025911", date: new Date(), color: 'green', operator:  {name: "Embratel", code: "21", category: "Phone", cost: 3}},
]

app.interceptor(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
  next();
});

app.interceptor(function(req, res, next){
  res.setHeader('Content-Type', 'application/json;charset=UTF-8'); 
  next();
});

app.get('/operators', function(req, res){
  res.write(JSON.stringify(operators));
  res.end();
});

app.get('/contacts', function(req, res){
  res.write(JSON.stringify(contacts));
  res.end();
});

app.post('/contact', function(req, res){
  var contato = req.body;
  contacts.push(JSON.parse(contato));
  res.end();
});

app.options('/contact', function(req, res){
  res.end();
});


