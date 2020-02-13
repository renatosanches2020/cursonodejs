//Modulo de rotas para home com funcao anonima
module.exports = function(app){
    app.get('/', function(req,res){
        res.render('home/index');
    });
}