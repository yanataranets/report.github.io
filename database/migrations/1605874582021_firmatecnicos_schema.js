'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FirmatecnicosSchema extends Schema {
  up () {
    this.create('firmatecnico', (table) => {
      table.increments()
      table.string('firmatecnico')
      table.timestamps()
    })
  }

  down () {
    this.drop('firmatecnicos')
  }
}

module.exports = FirmatecnicosSchema
