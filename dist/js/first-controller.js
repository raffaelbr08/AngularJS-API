app.controller('HeaderController',function($scope,$resource){
	var pokemon1 = $resource ('http://pokeapi.co/api/v2/pokemon/');
	var getpokemon = function(){
		pokemon1.get().$promise.then(function(response){
			$scope.pokemon = response;
			$scope.listar = response.results;
		}, function(promise){
			alert ("Erro ao requisitar");
		});
	};	

	getpokemon();

	$scope.alunos = [
		{nome:'rafael', telefone:"1139739272"},
		
		{nome:'joao', telefone:"1139735656"}
	];

	$scope.submeter = function(){
		if($scope.form_1.$valid){
			$scope.alunos.push({nome:$scope.nome_aluno, telefone:$scope.telefone_aluno});
		}else{
			alert("Preencha o formulario corretamente");
		}
	};	

	$scope.deletar = function(alunos){
		$scope.alunos = aluno.filter(function(alunos){
			if(!aluno.selecionado) return aluno;
		});
	};		


});