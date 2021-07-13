var express = require('express');
const researchController = require('../controllers/researchController');
var router = express.Router();


/* Research */
router.get('/', researchController.root);

/* Neuron Brain Support */
router.get('/NeuronBrainSupport', researchController.neuronBrainSupport);

/* Neuron Focus */
router.get('/NeuronFocus', researchController.neuronFocus);

/* Neuron Focus SC */
router.get('/NeuronFocusSC', researchController.neuronFocusSC);

/* Neuron Memory */
router.get('/NeuronMemory', researchController.neuronMemory);

/* Neuron Night */
router.get('/NeuronNight', researchController.neuronNight);

/* Neuron Zen */
router.get('/NeuronZen', researchController.neuronZen);

/* Neuron Plus */
router.get('/NeuronPlus', researchController.neuronPlus);

module.exports = router;