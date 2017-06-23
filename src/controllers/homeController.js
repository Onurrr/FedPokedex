/**
 * Homecontroller
 *
 * @params $scope, dataService
 * 
 */                                                   
let homeControllerCallback = ($scope, dataService) =>
	// $scope.pokemons is the model for the pokemon overview
    dataService.getPokemons( (response) => $scope.pokemons = response.data);

// export function
export default homeControllerCallback;