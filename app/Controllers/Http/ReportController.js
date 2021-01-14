'use strict'
const Report = use('App/Models/Report')


class ReportController {
  async index({view}){
    const reports = await Report.all();

    return view.render('report/index',{
      reports: reports.toJSON()
    })
  }
  async create({view}){
    return view.render('report/create');

  }

  async store({ request,response }) {
    const report = new Report();
    report.numerodeproyecto = request.input('numerodeproyecto');
    report.algo = request.input('algo');
    report.numerodedocumento = request.input('numerodedocumento');
    report.num = request.input('num');
    report.ed = request.input('ed');
    report.cliente = request.input('cliente');
    report.cif = request.input('cif');
    report.dirrecion = request.input('dirrecion');
    report.codigopostal = request.input('codigopostal');
    report.poblacion = request.input('poblacion');
    report.provincia = request.input('provincia');
    report.telefono = request.input('telefono');
    report.tecnico = request.input('tecnico');
    report.trabajosrealizados = request.input('trabajosrealizados');

    report.dia = request.input('dia');
    report.fecha = request.input('fecha');
    report.horasentrada = request.input('horasentrada');
    report.horassalida = request.input('horassalida')
    report.horasservicio = request.input('horasservicio');
    report.horasviaje = request.input('horasviaje');
    report.km = request.input('km');
    report.comida = request.input('comida');
    report.percrocta = request.input('percrocta');

    report.cantidad = request.input('cantidad');
    report.descripcion = request.input('descripcion');

    report.save();
    response.redirect('/firmatecnico/create');

  }

  async edit({view, params }) {
    const report = await Report.find(params.id)
    return view.render('report/edit',{
      report: report
    });
  }

  async update({ request, params, response }) {
    const report = await Report.find(params.id);
    report.numerodeproyecto = request.input('numerodeproyecto');
    report.algo = request.input('algo');
    report.numerodedocumento = request.input('numerodedocumento');
    report.num = request.input('num');
    report.ed = request.input('ed');
    report.cliente = request.input('cliente');
    report.cif = request.input('cif');
    report.dirrecion = request.input('dirrecion');
    report.codigopostal = request.input('codigopostal');
    report.poblacion = request.input('poblacion');
    report.provincia = request.input('provincia');
    report.telefono = request.input('telefono');
    report.tecnico = request.input('tecnico');
    report.trabajosrealizados = request.input('trabajosrealizados');
    report.fecha = request.input('fecha');

    report.dia = request.input('dia');
    report.fecha = request.input('fecha');
    report.horasentrada = request.input('horasentrada');
    report.horassalida = request.input('horassalida')
    report.horasservicio = request.input('horasservicio');
    report.horasviaje = request.input('horasviaje');
    report.km = request.input('km');
    report.comida = request.input('comida');
    report.percrocta = request.input('percrocta');

    report.cantidad = request.input('cantidad');
    report.descripcion = request.input('descripcion');


    report.fecha_creada = request.input('fecha_creada');

    report.save();

    response.redirect('/firmatecnico/{{firmatecnico.id}}/edit');

  }

  async show({view, params }){
    const report = await Report.find(params.id)
    return view.render('/report/show', {report: report});
  }
}

module.exports = ReportController
