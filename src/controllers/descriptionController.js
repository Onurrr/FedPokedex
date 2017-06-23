/**
 * descriptionController
 *
 * @params $scope, dataService
 * 
 */ 
let descriptionControllerCallback = ($scope, dataService) =>
	// $scope.description is the model for the pokemon description
	dataService.getDescription( (response) => $scope.description = response.data );

// export function
export default descriptionControllerCallback;