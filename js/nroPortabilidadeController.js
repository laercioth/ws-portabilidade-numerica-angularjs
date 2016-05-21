
/*Controller NroPortabilidade*/
app.controller('NroPortabilidadeCtrl', function($scope, $rootScope, $http) {

	$scope.init = function(){
		$scope.foneInvalido = false;
		$scope.loading = false;
		$scope.foneNaoEncontrado = false;
	}

	/*Chamada AJAX que faz a busca de operadora*/
	$scope.search = function (nro){
		$scope.resetImg();
		$scope.foneNaoEncontrado = false;
		if(nro !== '' && nro !== undefined && nro !== null){
			$scope.loading = true;
			$http({
			    method: 'GET',
			    url: $rootScope.URI_WS + nro,
			    headers: {
			        'X-Auth-Token': $rootScope.TOKEN,
			        'Access-Control-Allow-Origin':'*'
			    }
			}).then(function(response) {
			    $scope.loading = false;
			    $scope.foneInvalido = false;
			    if(response.data.data.rn1 === 0){
			    	$scope.foneNaoEncontrado = true;
			    }else{
			    	$scope.verificarLogo(response.data.data.carrier);	
			    }
			    console.log(response);
			}, function errorCallback(noResponse) {
				$scope.foneInvalido = false;
				$scope.foneNaoEncontrado = false;
				$scope.loading = false;
				console.log(noResponse);
			});
		}else{
			$scope.foneInvalido = true;
			$scope.foneNaoEncontrado = false;
		}
	}

	$scope.verificarLogo= function(operadora){
		switch(operadora != "") {
    		case operadora.toUpperCase() === "CLARO":
        		$scope.claro = true;
        	break;
    		case operadora.toUpperCase() === "CTBC":
        		$scope.ctbc = true;
        	break;
			case operadora.toUpperCase() === "NEXTEL":
        		$scope.nextel = true;
        	break;
        	case operadora.toUpperCase() === "OI":
        		$scope.oi = true;
        	break;
        	case operadora.toUpperCase() === "VIVO":
        		$scope.vivo = true;
        	break;
        	case operadora.toUpperCase() === "TIM":
        		$scope.tim = true;
        	break;	
    		default:
    			$scope.resetImg();
		}
	}
	
	$scope.resetImg = function(){
		$scope.claro = false;
		$scope.ctbc = false;
		$scope.nextel = false;
		$scope.oi = false;
		$scope.vivo = false;
		$scope.tim = false;
	}

	/*Limpa os campos*/
	$scope.clear = function (){
		$scope.numero = '';
		$scope.foneInvalido = false;
		$scope.foneNaoEncontrado = false;
	}
	/*Inicia a variaveis e seus valores*/
	$scope.init();	
});
