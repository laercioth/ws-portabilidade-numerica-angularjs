/*Modulo com injecao de dependencia para a mascara do numero*/
var app = angular.module('nroPortabilidadeApp', ['ui.utils.masks']);


 /**
 * QUANDO INCIAR O MODULO APP EXECUTAR OS COMPONENTES INCIAIS
 */
app.run(function($rootScope) {
	$rootScope.URI_WS = 'http://consulta-operadora.fluxoti.com/v1/consult/';
	$rootScope.TOKEN = 'e2242c684ea66b157a143287fd064c455b93df1067aeea35676688f1952078d3';  
});
