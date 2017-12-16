var express = require ("express"),
    app= express(),
    port = process.env.PORT
    
var todoRoutes= require('./Route/todo'); 
app.use('/api/todos',todoRoutes);


app.get('/', function(req,res){
    res.send("Hola Mundo");
    
});
app.get('/feliz',function(res,req){
   res.send("=D");
});


app.listen(port,function(){
    console.log("App esta utilizando " + port)
    
});