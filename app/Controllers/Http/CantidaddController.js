'use strict'
const Cantidadd = use('App/Models/Cantidadd')


class CantidaddController {
  async index({view}){
    const cantidadds = await Cantidadd.all();

    return view.render('cantidadd/index',{
      cantidadds: cantidadds.toJSON()
    })
  }
  async create({view}){
    return view.render('cantidadd/create');

  }

  async store({ request,response }) {
    const cantidadd = new Cantidadd()
    cantidadd.dia = request.input('dia');
    cantidadd.fecha = request.input('fecha');
    cantidadd.horasentrada = request.input('horasentrada');
    cantidadd.horassalida = request.input('horassalida')
    cantidadd.horasservicio = request.input('horasservicio');
    cantidadd.horasviaje = request.input('horasviaje');
    cantidadd.km = request.input('km');
    cantidadd.comida = request.input('comida');
    cantidadd.percrocta = request.input('percrocta');
    cantidadd.save();
    response.redirect('/material/create');

  }

  async edit({view, params }) {
    const cantidadd = await Cantidadd.find(params.id)
    return view.render('cantidadd/:id/edit',{
      cantidadd: cantidadd

    });
  }

  async update({ request, params, response }) {
    const cantidadd = await Cantidadd.find(params.id)
    cantidadd.dia = request.input('dia');
    cantidadd.fecha = request.input('fecha');
    cantidadd.horasentrada = request.input('horasentrada');
    cantidadd.horassalida = request.input('horassalida');
    cantidadd.horasservicio = request.input('horasservicio');
    cantidadd.horasviaje = request.input('horasviaje');
    cantidadd.km = request.input('km');
    cantidadd.comida = request.input('comida');
    cantidadd.percrocta = request.input('percrocta');

    cantidadd.save();

    response.redirect('/material/:id/edit');

  }
    async show({view, params }){
      const cantidadd = await Cantidadd.find(params.id)
      return view.render('cantidadd/show', {cantidadd: cantidadd});
  }
}

module.exports = CantidaddController
