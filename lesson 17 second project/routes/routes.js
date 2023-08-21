const express = require("express");
const router = express.Router();
const productRoutes = require("../products/productRoute");

router.use("/api/products", productRoutes);

router.use(express.static("../public"));

router.use("*", (req, res) => {
    res.status(404).send("Page Not Found!!!");
});

module.exports = router;
