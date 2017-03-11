'use strict'; // eslint-disable-line semi

const Sequelize = require('sequelize')
const db = require('APP/db')

const Prompt = db.define('prompts', {

  Text: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  }

 })

module.exports = Prompt
