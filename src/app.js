//  Import Modules
import routeProvider from '../src/routes/routeProvider.js';
import homeControllerCallback from '../src/controllers/homeController.js';
import pokemonControllerCallback from './controllers/pokemonController.js';
import descriptionControllerCallback from './controllers/descriptionController.js';

// Initialisatie van de angular module
let app = angular.module("fed01pokedex", ["ngRoute"]);

// angular routes
app.config(routeProvider);

// amgular cortrollers
app.controller("homeController", homeControllerCallback);
app.controller("pokemonController", pokemonControllerCallback);
app.controller("descriptionController", descriptionControllerCallback);

/**
 * angular service om http requests te doen
 *
 * @params $http, $routeParams
 * 
 */
app.service('dataService', function ($http, $routeParams) {
	// muziekanten overzicht get request
	this.getPokemons = (success, error) => $http.get('https://pokemon.onurr.nl/pokemon/').then(success).catch(error);

	// muziekant detail get request
	this.getPokemon = (success, error) => $http.get('https://pokemon.onurr.nl/pokemon/'+$routeParams.id).then(success).catch(error);

	// liedjes overzicht get request
	this.getDescription = (success, error) => $http.get('https://pokemon.onurr.nl/desc/'+$routeParams.id).then(success).catch(error);
});