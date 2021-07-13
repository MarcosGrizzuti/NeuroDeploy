let productsController = {
    root: function(req, res, next) {
        res.render('research/productos', { title: 'Research - Productos' });
    },
    neuronBrainSupport: function(req, res, next) {
        res.render('research/neuronBrainSupport', { title: 'Research - NeuronBrainSupport' });
    },
    neuronFocus: function(req, res, next) {
        res.render('research/neuronFocus', { title: 'Research - NeuronFocus' });
    },
    neuronFocusSC: function(req, res, next) {
        res.render('research/neuronFocusSC', { title: 'Research - NeuronFocus SC' });
    },
    neuronMemory: function(req, res, next) {
        res.render('research/neuronMemory', { title: 'Research - NeuronMemory' });
    },
    neuronNight: function(req, res, next) {
        res.render('research/neuronNight', { title: 'Research - NeuronNight' });
    },
    neuronZen: function(req, res, next) {
        res.render('research/neuronZen', { title: 'Research - NeuronZen' });
    },
    neuronPlus: function(req, res, next) {
        res.render('research/neuronPlus', { title: 'Research - NeuronPlus' });
    }
}

module.exports = productsController