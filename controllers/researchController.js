let productsController = {
    root: function(req, res, next) {
        res.render('research/productos', { title: 'Research - Productos' });
    },
    neuronBrainSupport: function(req, res, next) {
        res.render('research/NeuronBrainSupport', { title: 'Research - NeuronBrainSupport' });
    },
    neuronFocus: function(req, res, next) {
        res.render('research/NeuronFocus', { title: 'Research - NeuronFocus' });
    },
    neuronFocusSC: function(req, res, next) {
        res.render('research/NeuronFocusSC', { title: 'Research - NeuronFocus SC' });
    },
    neuronMemory: function(req, res, next) {
        res.render('research/NeuronMemory', { title: 'Research - NeuronMemory' });
    },
    neuronNight: function(req, res, next) {
        res.render('research/NeuronNight', { title: 'Research - NeuronNight' });
    },
    neuronZen: function(req, res, next) {
        res.render('research/NeuronZen', { title: 'Research - NeuronZen' });
    },
    neuronPlus: function(req, res, next) {
        res.render('research/NeuronPlus', { title: 'Research - NeuronPlus' });
    }
}

module.exports = productsController