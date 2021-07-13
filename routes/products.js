var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* Productos */
router.get('/', productsController.root);

/* Neuron Brain Support */
router.get('/NeuronBrainSupport', productsController.neuronBrainSupport);

/* Neuron Focus */
router.get('/NeuronFocus', productsController.neuronFocus);

/* Neuron Focus SC */
router.get('/NeuronFocusSC', productsController.neuronFocusSC);

/* Neuron Memory */
router.get('/NeuronMemory', productsController.neuronMemory);

/* Neuron Night */
router.get('/NeuronNight', productsController.neuronNight);

/* Neuron Zen */
router.get('/NeuronZen', productsController.neuronZen);

/* Neuron Plus */
router.get('/NeuronPlus', productsController.neuronPlus);


module.exports = router;