'use strict'
const Firmatecnico = use('App/Models/Firmatecnico')
class FirmatecnicoController {
  async index({view}){
    const firmatecnicos = await Firmatecnico.all();

    return view.render('firmatecnico/index',{
      firmatecnicos: firmatecnicos.toJSON()
    })
  }
  async create({view}){
    return view.render('firmatecnico/create');
  }
  async store({ request,response }) {
    const firmatecnico = new Firmatecnico();
    firmatecnico.firmatecnico = request.input('firmatecnico');
    firmatecnico.save();
    response.redirect('/firmacliente/{{firmacliente.id}}/edit');

  }
  async edit({view, params }) {
    const firmatecnico = await Firmatecnico.find(params.id)
    return view.render('firmatecnico/edit',{
      firmatecnico: firmatecnico
    });
  }

  async update({ request, params, response }) {
    const firmatecnico = await Firmatecnico.find(params.id)
    firmatecnico.firmatecnico = request.input('firmatecnico');
    firmatecnico.save();

    response.redirect('/firmacliente/{{firmacliente.id}}/edit');

  }
  async show({view, params }){
    const firmatecnico = await Firmatecnico.find(params.id)
    return view.render('/report/show', {firmatecnico: firmatecnico});
  }


}

module.exports = FirmatecnicoController
