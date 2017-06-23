/**
 * Establish Routes, templaturl == View
 *
 * @param $routeProvider
 * 
 */
let routeProvider = ($routeProvider) => {
	$routeProvider
		// Pokemon Overview
		.when("/", {
			templateUrl: "templates/home.html",
			controller: "homeController"
		})
		// Pokemon Specific Information
		.when("/pokemon/:id", {
			templateUrl: "templates/pokemon.html",
			controller: "pokemonController"
		})
		// Pokemon Specific description
		.when("/desc/:id", {
			templateUrl: "templates/description.html",
			controller: "descriptionController"
		})
		// Redirect to homepage when something goes wrong ex. route doesn't match
		.otherwise({redirectTo: "/"});	
}

// Export as module
export default routeProvider;