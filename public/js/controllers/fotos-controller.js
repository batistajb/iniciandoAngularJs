angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos =[];
	$scope.filtro ='';

	var promise = $http.get('v1/fotos');

	$http.get('v1/fotos')
		.success(function (fotos) {
			$scope.fotos = fotos;
		})
		.error(function (error) {
			console.log(error);
		});


	/*promise.then(function (retorno) {
		$scope.fotos = retorno.data;
	}).catch(function (error) {
		console.log(error);
	})*/

});
