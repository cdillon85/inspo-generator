'use strict'; // eslint-disable-line semi

const Inspo = require('./inspo')
const Prompt = require('./prompt')

Inspo.belongsTo(Prompt)
Prompt.hasMany(Inspo)
module.exports = {Inspo, Prompt}
