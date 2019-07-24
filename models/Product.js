var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
  prodName: String,
  prodDesc: String,
  prodPrice: Number,
  updateAt: { type: Date, default: Date.now }
});
/*
ProductSchema.method("transform", function() {
  var obj = this.toObject();
  //Rename fields
  obj.id = obj._id;
  delete obj._id;
  return obj;
});
*/
module.exports = mongoose.model("productModel", ProductSchema);
