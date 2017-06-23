/**
 * pokemonController
 *
 * @params $scope, dataService
 * 
 */
let pokemonControllerCallback = ($scope, dataService) =>
    //$scope.description is the model for the pokemon specific information
	dataService.getPokemon( (response) => $scope.pokemon = response.data );


// export function
export default pokemonControllerCallback;