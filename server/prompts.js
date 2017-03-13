'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Inspo = db.model('inspos')

const express = require('express')
const router = new express.Router()
module.exports = router


router.get('/more/:id', function (req, res, next){
	let time = 6
	Inspo.findAll({
		where: {
			prompt_id: req.params.id,
			Time: time
		}
	})
	.then(inspos => res.send(inspos))
	.catch(next)
})

router.get('/less/:id', function (req, res, next){
	let time = 4
	Inspo.findAll({
		where: {
			prompt_id: req.params.id,
			Time: time
		}
	})
	.then(inspos => res.send(inspos))
	.catch(next)
})


