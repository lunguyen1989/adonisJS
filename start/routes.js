'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
Route.on('/').render('welcome');
//Make token for dev
Route.get('/api/user/get-token', 'UserController.generateToken');

Route.post('/api/user/register', 'UserController.register').middleware('validToken');
Route.post('/api/user/login', 'UserController.login').middleware('validToken');

Route.get('/api/job', 'JobController.getJobs').middleware('auth');
Route.post('/api/job', 'JobController.createJob').middleware('auth');
Route.put('/api/job/:id', 'JobController.updateJob').middleware('auth');
Route.delete('/api/job/:id', 'JobController.deleteJob').middleware('auth');