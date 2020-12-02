'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FirmaclientesSchema extends Schema {
  up () {
    this.create('firmaclientes', (table) => {
      table.increments()
      table.string('firmacliente')
      table.timestamps()
    })
  }

  down () {
    this.drop('firmaclientes')
  }
}

module.exports = FirmaclientesSchema
