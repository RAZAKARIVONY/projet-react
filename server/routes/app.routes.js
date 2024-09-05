const express = require('express')

const router = express.Router()

const App = require('../controllers/app.controller');

  router.post('/', App.create);

  router.get('/', App.findAll);

//   router.get('/:id', App.findOne);

  router.put('/:id', App.update);

  router.delete('/:id', App.delete);

  module.exports= router;


 
module.exports = router;