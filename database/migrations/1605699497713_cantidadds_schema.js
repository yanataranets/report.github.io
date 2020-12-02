'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CantidaddsSchema extends Schema {
  up () {
    this.create('cantidadds', (table) => {
      table.increments()
      table.string('dia')
      table.string('fecha')
      table.string('horasentrada')
      table.string('horassalida')
      table.string('horasservicio')
      table.string('horasviaje')
      table.string('km')
      table.string('comida')
      table.string('percrocta')
      table.timestamps()
    })
  }

  down () {
    this.drop('cantidadds')
  }
}

module.exports = CantidaddsSchema
