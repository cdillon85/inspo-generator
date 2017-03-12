'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Inspo = db.model('inspos')

const express = require('express')
const router = new express.Router()
module.exports = router

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

