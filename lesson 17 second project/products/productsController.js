const {
    getProducts: getProductsService,
    findById,
    idExists,
    postProduct,
    updateProduct,
    eraseProduct,
    addOne,
    removeOne,
} = require("./productsService");

const getProducts = (req, res) => {
    try {
        const products = getProductsService();
        if (!products) throw new Error("Not valid Data");
        res.send(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        if (isNaN(+id)) throw new Error("ID Must be Number!");
        const idNumber = Number(id);
        const productToReturn = findById(idNumber);
        if (productToReturn instanceof Error)
            throw new Error(productToReturn.message);
        res.send(productToReturn);
    } catch (err) {
        console.log("This Is a Bad Error");
        res.status(400).send(err.message);
    }
};
const postNewProduct = (req, res) => {
    try {
        let id = req.body.id;
        if (isNaN(+id))
            throw new Error(
                "New Product Must Have An ID!\nID Must Be A Number!"
            );
        if (idExists(id))
            throw new Error(`ID Must Be Unique\nID "${id}" Already Exists!`);
        const newProduct = req.body;
        let e = postProduct(newProduct);
        if (e instanceof Error) throw new Error(e);
        res.send(newProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const putProduct = (req, res) => {
    try {
        const { id } = req.params;
        if (isNaN(+id)) throw new Error("ID Must be Number!");
        if (typeof req.body.id === "string")
            throw new Error("ID Must Be A Number!");
        const idNumber = Number(id);
        const newProduct = req.body;
        const updatedProduct = updateProduct(idNumber, newProduct);
        if (updatedProduct instanceof Error) throw new Error(updatedProduct);
        res.send(updatedProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const delProduct = (req, res) => {
    try {
        const { id } = req.params;
        if (isNaN(+id)) throw new Error("ID Must be Number!");
        if (typeof req.body.id === "string")
            throw new Error("ID Must Be A Number!");
        const idNumber = Number(id);
        const updatedAllProducts = eraseProduct(idNumber);
        if (updatedAllProducts instanceof Error)
            throw new Error(updatedAllProducts);
        res.send(updatedAllProducts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const addOneToQuantity = (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        if (isNaN(+id)) throw new Error("ID Must be Number!");
        const idNumber = Number(id);
        const updatedProduct = addOne(idNumber);
        res.send(updatedProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const removeOneOfQuantity = (req, res) => {
    try {
        const { id } = req.params.id;
        if (isNaN(+id)) throw new Error("ID Must be Number!");
        const idNumber = Number(id);
        const updatedProduct = removeOne(idNumber);
        res.send(updatedProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getProducts,
    getProductById,
    postNewProduct,
    putProduct,
    delProduct,
    addOneToQuantity,
    removeOneOfQuantity,
};
