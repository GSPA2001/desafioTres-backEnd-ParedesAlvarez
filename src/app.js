import express from 'express';
import ProductManager from './productmanager.js';

const PORT = 8080;
const app = express();
const manager = new ProductManager('./products.json');

app.get('/products', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 0;
        const products = await manager.getProducts();

        if (limit > 0) {
            res.json({ result: 'OK', data: products.slice(0, limit) });
        } else {
            res.json({ result: 'OK', data: products });
        }
    } catch (error) {
        res.status(500).json({ result: 'Error', message: error.message });
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = await manager.getProductById(productId);

        res.json({ result: 'OK', data: product });
    } catch (error) {
        res.status(404).json({ result: 'Error', message: 'Producto no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express activo en puerto ${PORT}`);
});