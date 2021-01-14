'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.string('numerodeproyecto')
      table.string('algo')
      table.string('numerodedocumento')
      table.string('num')
      table.string('ed')
      table.string('cliente')
      table.string('cif')
      table.string('dirrecion')
      table.string('codigopostal')
      table.string('poblacion')
      table.string('provincia')
      table.string('telefono')
      table.string('tecnico')
      table.string('trabajosrealizados')

      table.string('dia')
      table.string('fecha')
      table.string('horasentrada')
      table.string('horassalida')
      table.string('horasservicio')
      table.string('horasviaje')
      table.string('km')
      table.string('comida')
      table.string('percrocta')

      table.string('fecha_creada')

      table.string('cantidad')
      table.string('descripcion')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema
