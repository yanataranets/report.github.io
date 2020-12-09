'use strict'
const Firmacliente = use('App/Models/Firmacliente')
class FirmaclienteController {
  async index({view}){
    const firmaclientes = await Firmacliente.all();

    return view.render('firmacliente/index',{
      firmaclientes: firmaclientes.toJSON()
    })
  }
  async create({view}){
    return view.render('firmacliente/create');
  }
  async store({ request,response }) {
    const firmacliente = new Firmacliente();
    firmacliente.firmacliente = request.input('firmacliente');
    firmacliente.save();
    response.redirect('/report');

  }
  async edit({view, params }) {
    const firmacliente = await Firmacliente.find(params.id)
    return view.render('firmacliente/edit',{
      firmacliente: firmacliente
    });
  }

  async update({ request, params, response }) {
    const firmacliente = await Firmacliente.find(params.id)
    firmacliente.firmacliente = request.input('firmacliente');
    firmacliente.save();

    response.redirect('/report');

  }
  async show({view, params }){
    const firmacliente = await Firmacliente.find(params.id)
    return view.render('/firmacliente/show', {firmacliente: firmacliente});
  }


}

module.exports = FirmaclienteController
