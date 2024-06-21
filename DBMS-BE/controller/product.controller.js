import { createProduct, deleteProduct, getProductById, getProducts, getProductsByCategory, popularProducts, updateProduct } from "../queries/product.queries.js";
import { asyncHandler,generateResponse } from "../utils/helper.js";

export const createProducts = asyncHandler(async (req, res) => {
        const { name, price, description, picture, stock,type,category,isFeature } = req.body;
        console.log(req.body);
        const product = await createProduct(name, price, description, picture, stock,type,category,isFeature);
        generateResponse(product,"created successfully",res);
            
})

export const fetchProducts = asyncHandler(async (req, res) => {
    const products = await getProducts();
    generateResponse(products,"products Fetched", res);
})

export const fetchProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await getProductById(id);
    generateResponse(product,"products Fetched", res);
})

export const updateProducts = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const { name, price, description, picture, stock,type,category,isFeature } = req.body;
    const product = await updateProduct(id,name, price, description, picture, stock,type,category,isFeature);
    generateResponse(product,"products Fetched", res);
})

export const deleteProducts = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await deleteProduct(id);
    generateResponse(product,"products Fetched", res);
})

export const popularProduct = asyncHandler(async (req, res) => {
    const products = await popularProducts();
    console.log(products);
    console.log("asdasdalsjdolasyhdosa");
    generateResponse(products,"products Fetched", res);
})

export const getProductsByCategories = asyncHandler(async (req, res) => {
    const { category } = req.params;
    const products = await getProductsByCategory(category);
    generateResponse(products,"Category products Fetched", res);
})