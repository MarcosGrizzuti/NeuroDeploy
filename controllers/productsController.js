let researchController = {
    root: function(req, res, next) {
        res.render('products/productos', { title: 'Productos' });
    },
    neuronBrainSupport: function(req, res, next) {
        res.render('product/neuronBrainSupport', { title: 'NeuronBrainSupport' });
    },
    neuronFocus: function(req, res, next) {
        res.render('product/neuronFocus', { title: 'NeuronFocus' });
    },
    neuronFocusSC: function(req, res, next) {
        res.render('product/neuronFocusSC', { title: 'NeuronFocus SC' });
    },
    neuronMemory: function(req, res, next) {
        res.render('product/neuronMemory', { title: 'NeuronMemory' });
    },
    neuronNight: function(req, res, next) {
        res.render('product/neuronNight', { title: 'NeuronNight' });
    },
    neuronZen: function(req, res, next) {
        res.render('product/neuronZen', { title: 'NeuronZen' });
    },
    neuronPlus: function(req, res, next) {
        res.render('product/neuronPlus', { title: 'NeuronPlus' });
    }
}

module.exports = researchController