'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Inspo = db.define('inspos', {
  Time: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  Text: {
    type: Sequelize.TEXT,
    validate: {
			notEmpty: true
		}
  },
  Author: {
    type: Sequelize.STRING,
    defaultValue: 'unknown'
  },
  URL: {
    type: Sequelize.STRING,
    defaultValue: null
  }
})


module.exports = Inspo
