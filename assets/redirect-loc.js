var xhttp = new XMLHttpRequest();
var url_base = 'https://www.cloudflare.com/cdn-cgi/trace';

var regras = [];

function addRegra(sigla_pais, st_seguir, url_destino) {
	regras.push({ 
		sigla_pais: sigla_pais,
		st_seguir: st_seguir,
		url_destino: url_destino 
	});
}

function redirecionar(url) {
	setTimeout(function() {
		window.location.href = url;
	}, 150);
}

function executarRegras() {
	var url = url_base;
	xhttp.open('GET', url);
	xhttp.send();

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState === 4){
			if(xhttp.status === 200){
				var result = xhttp.responseText;
                var info_loc = result.split("\n")[8].split("=")[1];
				//console.log(info_loc);
				for(regra of regras){
					if((regra.st_seguir && regra.sigla_pais === info_loc) || 
					(!regra.st_seguir && regra.sigla_pais !== info_loc)){
						redirecionar(regra.url_destino);
						break;
					}
				}
			}
			else{
				console.log('Falha no redirect-ip');
			}
		}
	}
}
