import fs from 'fs';

class ProductManager {
    constructor(filePath) {
        this.path = filePath;
    }

    async addProduct(product) {
        try {
            const products = await this.getProducts();
            product.id = this.generateUniqueId(products);
            products.push(product);
            await this.saveProducts(products);
            return product;
        } catch (error) {
            throw new Error('No se pudo agregar el producto.');
        }
    }

    async getProducts() {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error('No se pudieron obtener los productos.');
        }
    }

    async getProductById(id) {
        try {
            const products = await this.getProducts();
            const product = products.find((p) => p.id === id);
            if (!product) {
                throw new Error('Producto no encontrado');
            }
            return product;
        } catch (error) {
            throw new Error('Producto no encontrado');
        }
    }

    async updateProduct(id, updatedProduct) {
        try {
            const products = await this.getProducts();
            const productIndex = products.findIndex((p) => p.id === id);
            if (productIndex === -1) {
                throw new Error('Producto no encontrado');
            }
            products[productIndex] = { ...products[productIndex], ...updatedProduct };
            await this.saveProducts(products);
        } catch (error) {
            throw new Error('No se pudo actualizar el producto');
        }
    }

    async deleteProduct(id) {
        try {
            const products = await this.getProducts();
            const updatedProducts = products.filter((p) => p.id !== id);
            if (products.length === updatedProducts.length) {
                throw new Error('Producto no encontrado');
            }
            await this.saveProducts(updatedProducts);
        } catch (error) {
            throw new Error('No se pudo eliminar el producto');
        }
    }

    generateUniqueId(products) {
        const ids = products.map((p) => p.id);
        let newId = 1;
        while (ids.includes(newId)) {
            newId++;
        }
        return newId;
    }

    async saveProducts(products) {
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
    }
}

export default ProductManager;