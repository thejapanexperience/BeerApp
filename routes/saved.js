const express = require('express')
const router = express.Router()
const Model = require('../models/model')


router.post('/',(req,res) => {
  Model.save(req.body)
  .then((data) => {res.send(data)})
  .catch((err) => {res.status(400).send(err)})
})

router.delete(`/:id`,(req,res) => {
  let {id} = req.params;
  Model.deleted(id)
  .then((data) => {res.send(data)})
  .catch((err) => {res.status(400).send(err)})
})

router.get('/',(req,res) => {
  Model.getSaved()
  .then((data) => {res.send(data)})
  .catch((err) => {res.status(400).send(err)})
})

module.exports = router
