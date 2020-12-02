'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FirmasSchema extends Schema {
  up () {
    this.create('firmas', (table) => {
      table.increments()
      table.string('firmacliente')
      table.string('firmatecnico')
      table.timestamps()
    })
  }

  down () {
    this.drop('firmas')
  }
}

module.exports = FirmasSchema
