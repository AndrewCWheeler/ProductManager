const { Product } = require("../models/product.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Working"
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
    .then(data => res.json({message: "Success", results: data }))
    .catch(err => res.json({message: "Error", results: err}));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(data => res.json({message: "Success", results: data }))
    .catch(err => res.json({message: "Error", results: err}));
};

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json({message: "Success", results: data }))
    .catch(err => res.json({message: "Error", results: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
    .then(data => res.json({message: "Success", results: data }))
    .catch(err => res.json({message: "Error", results: err}));
}