var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var productModel = require("../models/Product");

/* GET ALL PRODUCTS */
router.get("/", function(req, res, next) {
  productModel.find(function(err, productModel) {
    if (err) return next(err);
    res.json(productModel);
  });
});

/* GET A SINGLE PRODUCT BY ID */
router.get("/:id", function(req, res, next) {
  productModel.findById(req.params.id, function(err, Singleproduct) {
    if (err) return next(err);
    res.json(Singleproduct);
  });
});
/* SAVE PRODUCT */
router.post("/", function(req, res, next) {
  productModel.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put("/:id", function(req, res, next) {
  productModel.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete("/:id", function(req, res, next) {
  productModel.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*EXPORT ROUTER */
module.exports = router;
