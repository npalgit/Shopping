const { Item } = require("../models");

exports.listItems = async (req, res) => {
  try {
    const items = await Item.find();
    if (items) res.status(200).json({ status: "successful", data: items });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
      message: "an error occured while ritriving items",
    });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) res.status(200).json({ status: "successful", data: item });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
      message: "an error occured while ritriving item",
    });
  }
};

exports.createItem = async (req, res) => {
  const query = req.body;
  try {
    let item = await Item.find({ name: req.body.name });

    if (!item.length) {
      item = await Item.create(query);

      if (item) res.status(201).json({ status: "successful", data: item,  message: "item successfully added",});
    } else {
      return res.status(400).json({
        status: "failed",
        message: "an item with same name already exist",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: "failed",
      message: "an error occured while creating item",
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    let item = await Item.findById(req.body._id);

    if (item) {
      item = await Item.findByIdAndUpdate(req.body._id, req.body, {
        runValidators: true,
        returnOriginal: false,
      });
      res.status(201).json({
        status: "successful",
        message: "item successfully saved",
        data: item,
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "no item found to update",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "an error occured while updating item",
    });
  }
};

exports.deleteItem = async (req, res) => {
    try {
      let item = await Item.findById(req.params.id);
  
      if (item) {
        item = await Item.findByIdAndDelete(req.params.id);
        res.status(201).json({
          status: "successful",
          data: item,
          message: "item successfully deleted",
        });
      } else {
        return res.status(400).json({
          status: "failed",
          message: "no item found to delete",
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        message: "an error occured while deleting item",
      });
    }
  };