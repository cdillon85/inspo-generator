'use strict'; // eslint-disable-line semi

require('APP/db')
const api = module.exports = require('express').Router() // eslint-disable-line new-cap

api.use('/prompts', require('./prompts'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
