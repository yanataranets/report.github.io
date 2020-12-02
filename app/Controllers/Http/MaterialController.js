'use strict'
const Material = use('App/Models/Material')
class MaterialController {
  async index({view}){
    const materials = await Material.all();

    return view.render('material/index',{
      materials: materials.toJSON()
    })
  }
  async create({view}){
    return view.render('material/create');

  }

  async store({ request,response }) {
    const material = new Material();
    material.cantidad = request.input('cantidad');
    material.descripcion = request.input('descripcion');
    material.save();

    response.redirect('/firmatecnico/create');

  }

  async edit({view, params }) {
    const material = await Material.find(params.id)
    return view.render('material/edit',{
      material: material
    });
  }

  async update({ request, params, response }) {
    const material = await Material.find(params.id)
    material.cantidad = request.input('cantidad');
    material.descripcion = request.input('descripcion');

    material.save();

    response.redirect('/firmatecnico/edit');

  }

  async show({view}){
    return view.render('material/show');
  }
}

module.exports = MaterialController
