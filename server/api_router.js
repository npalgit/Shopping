const express = require("express");
const { item } = require("./controller");
const router = express.Router();
const validation = {};
router.get("/items", item.listItems);
router.post("/item", item.createItem);
router.put("/item", item.updateItem);
router.delete("/item/:id", item.deleteItem);

module.exports = router;
