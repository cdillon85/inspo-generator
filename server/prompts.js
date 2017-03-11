'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Prompt = db.model('prompts')
const Inspo = db.model('inspos')

const express = require('express')
const router = new express.Router()
module.exports = router

router.get('/', function( req, res, next) {
  Prompt.findAll()
  .then(function(prompts) {
    res.send(prompts)
  })
  .catch(next)
})

router.get('/:id/:time', function (req, res, next){
	Inspo.findAll({
		where: {
			prompt_id: req.params.id,
			Time: req.params.time
		}
	})
	.then(inspos => res.send(inspos))
	.catch(next)
})

