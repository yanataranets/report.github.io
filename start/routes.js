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
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('/report/index').as('home').middleware(['auth'])

Route.get('register', 'Auth/RegisterController.showRegisterForm').middleware([
  'authenticated'
])
Route.post('register', 'Auth/RegisterController.register').as('register')
Route.get('register/confirm/:token', 'Auth/RegisterController.confirmEmail')
Route.get('login', 'Auth/LoginController.showLoginForm').middleware([
  'authenticated'
])
Route.post('login', 'Auth/LoginController.login').as('login')
Route.get('logout', 'Auth/AuthenticatedController.logout')
Route.get('password/reset', 'Auth/PasswordResetController.showLinkRequestForm')
Route.post('password/email', 'Auth/PasswordResetController.sendResetLinkEmail')
Route.get('password/reset/:token', 'Auth/PasswordResetController.showResetForm')
Route.post('password/reset', 'Auth/PasswordResetController.reset')

Route.get('/report', 'ReportController.index')
Route.get('/report/create', 'ReportController.create')
Route.get('/report/edit', 'ReportController.edit')
Route.get('/report/show', 'ReportController.show')
Route.post('/report', 'ReportController.store')
Route.get('/report/:id/edit', 'ReportController.edit')
Route.get('/report/:id', 'ReportController.show')
Route.put('/report/:id', 'ReportController.update')

Route.get('/firmatecnico', 'FirmatecnicoController.index')
Route.get('/firmatecnico/create', 'FirmatecnicoController.create')
Route.get('/firmatecnico/edit', 'FirmatecnicoController.edit')
Route.get('/firmatecnico/show', 'FirmatecnicoController.show')
Route.post('/firmatecnico', 'FirmatecnicoController.store')
Route.get('/firmatecnico/:id/edit', 'FirmatecnicoController.edit')
Route.get('/firmatecnico/:id', 'FirmatecnicoController.show')
Route.put('/firmatecnico/:id', 'FirmatecnicoController.update')

Route.get('/firmacliente', 'FirmaclienteController.index')
Route.get('/firmacliente/create', 'FirmaclienteController.create')
Route.get('/firmacliente/edit', 'FirmaclienteController.edit')
Route.get('/firmacliente/show', 'FirmaclienteController.show')
Route.post('/firmacliente', 'FirmaclienteController.store')
Route.get('/firmacliente/:id/edit', 'FirmaclienteController.edit')
Route.get('/firmacliente/:id', 'FirmaclienteController.show')
Route.put('/firmacliente/:id', 'FirmaclienteController.update')

// Route.get('/cantidadd', 'CantidaddController.index')
// Route.get('/cantidadd/create', 'CantidaddController.create')
// Route.get('/cantidadd.edit', 'CantidaddController.edit')

Route.get('/cantidadd/create', 'CantidaddController.create')
Route.post('/cantidadd','CantidaddController.store')
Route.get('/cantidadd/edit', 'CantidaddController.edit')

Route.get('/material/create', 'MaterialController.create')
Route.post('/material','MaterialController.store')
// Route.get('/material.edit', 'MaterialController.edit')
//
// Route.get('/firmatecnico/create', 'FirmatecnicoController.create')
// Route.post('/firmatecnico','FirmatecnicoController.store')
// Route.get('/firmatecnico/edit', 'FirmatecnicoController.edit')

Route.get('/firmacliente/create', 'FirmaclienteController.create')
Route.post('/firmacliente','FirmaclienteController.store')
Route.get('/firmacliente/edit', 'FirmaclientelController.edit')

// Route.post('/report', 'ReportController.store')
//
// Route.get('/report/:id/edit', 'ReportController.edit')
// Route.post('/report/:id', 'ReportController.show')
// Route.put('/report/:id', 'ReportController.update')

Route.get('/cantidadd/:id/edit', 'CantidaddController.edit')
Route.post('/cantidadd:id', 'CantidaddController.show')
Route.put('/cantidadd/:id', 'CantidaddController.update')

Route.get('/material/:id/edit', 'MaterialController.edit')
Route.post('/material/:id', 'MaterialController.show')
Route.put('/material/:id', 'MaterialController.update')

Route.get('/firmatecnico/:id/edit', 'FirmatecnicoController.edit')
Route.post('/firmatecnico/:id', 'FirmatecnicoController.show')
Route.put('/firmatecnico/:id', 'FirmatecnicoController.update')

Route.get('/firmacliente/:id/edit', 'FirmaclienteController.edit')
Route.post('/firmacliente/:id', 'FirmaclienteController.show')
Route.put('/firmacliente/:id', 'FirmaclienteController.update')

// Route.put('/report/:id', 'ReportController.show')
