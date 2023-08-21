const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductById,
    postNewProduct,
    putProduct,
    delProduct,
    addOneToQuantity,
    removeOneOfQuantity,
} = require("../products/productsController");

router.get("/:id", getProductById);
router.get("/", getProducts);
router.post("/", postNewProduct);
router.put("/:id", putProduct);
router.delete("/:id", delProduct);
router.put("/add/:id", addOneToQuantity);
router.put("/remove/:id", removeOneOfQuantity);

module.exports = router;
