const { getData: getDataDal } = require("./productsDal");

const getProducts = () => {
    try {
        const products = getDataDal();
        if (products instanceof Error) throw new Error(products);
        return products;
    } catch (error) {
        return error;
    }
};
const findById = (id) => {
    try {
        const allProducts = getProducts();
        if (allProducts instanceof Error) throw new Error(allProducts);
        const productFound = allProducts.find((product) => product.id === id);
        if (!productFound)
            throw new Error(
                `In FindById \nIn productsService.js\n Product Not Found!\nNo ID "${id}" Not Exists`
            );
        return productFound;
    } catch (error) {
        return error;
    }
};
const idExists = (id) => {
    try {
        const allProducts = getProducts();
        if (allProducts instanceof Error) throw new Error(allProducts);
        const x = allProducts.find((product) => product.id === Number(id));
        return x;
    } catch (error) {
        return error;
    }
};
const postProduct = (productObj) => {
    try {
        const allProducts = getProducts();
        if (allProducts instanceof Error) throw new Error(allProducts);
        allProducts.push(productObj);
        console.log(allProducts);
    } catch (error) {
        return error;
    }
};
const updateProduct = (id, newProduct) => {
    try {
        const allProducts = getProducts();
        if (allProducts instanceof Error) throw new Error(allProducts);
        const productIndex = allProducts.findIndex(
            (product) => product.id === id
        );
        if (productIndex === -1)
            throw new Error("Not Found Product With This ID!");
        allProducts[productIndex] = newProduct;
        return allProducts[productIndex];
    } catch (error) {
        return error;
    }
};
const eraseProduct = (id) => {
    try {
        const allProducts = getProducts();
        const productIndex = allProducts.findIndex(
            (product) => product.id === id
        );
        if (productIndex === -1)
            throw new Error("Not Found Product With This ID!");
        allProducts.splice(productIndex, 1);
        return allProducts;
    } catch (error) {
        return error;
    }
};
const addOne = (id) => {
    try {
        const allProducts = getProducts();
        const productIndex = allProducts.findIndex(
            (product) => product.id === id
        );
        if (productIndex === -1)
            throw new Error("Not Found Product With This ID!");
        allProducts[productIndex].quantity += 1;
        return allProducts[productIndex];
    } catch (error) {
        return error;
    }
};
const removeOne = () => {
    try {
        const allProducts = getProducts();
        const productIndex = allProducts.findIndex(
            (product) => product.id === id
        );
        if (productIndex === -1)
            throw new Error("Not Found Product With This ID!");
        allProducts[productIndex].quantity -= 1;
        return allProducts[productIndex];
    } catch (error) {
        return error;
    }
};
module.exports = {
    getProducts,
    findById,
    idExists,
    postProduct,
    updateProduct,
    eraseProduct,
    addOne,
    removeOne,
};
