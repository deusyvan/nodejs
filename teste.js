var fs = require('fs');

fs.readFile('texto.txt', function(e,r){
	var log = r.toString();//Transforma em string
	
	var linhas = log.split('\n');//Cria um array de linhas
	
	for ( var i in linhas) {
		var partes = linhas[i].split(' ');
		
		console.log("-------------------");
		console.log('DATA: '+partes[0]);
		console.log('TIPO: '+partes[1]);
		console.log('MSG: '+partes[2]);
	}
	
})