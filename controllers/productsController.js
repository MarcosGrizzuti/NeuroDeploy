let researchController = {
    root: function(req, res, next) {
        res.render('products/productos', { title: 'Productos' });
    },
    neuronBrainSupport: function(req, res, next) {
        res.render('product/NeuronBrainSupport', { title: 'NeuronBrainSupport' });
    },
    neuronFocus: function(req, res, next) {
        res.render('product/NeuronFocus', { title: 'NeuronFocus' });
    },
    neuronFocusSC: function(req, res, next) {
        res.render('product/NeuronFocusSC', { title: 'NeuronFocus SC' });
    },
    neuronMemory: function(req, res, next) {
        res.render('product/NeuronMemory', { title: 'NeuronMemory' });
    },
    neuronNight: function(req, res, next) {
        res.render('product/NeuronNight', { title: 'NeuronNight' });
    },
    neuronZen: function(req, res, next) {
        res.render('product/NeuronZen', { title: 'NeuronZen' });
    },
    neuronPlus: function(req, res, next) {
        res.render('product/NeuronPlus', { title: 'NeuronPlus' });
    }
}

module.exports = researchController