# Tercer desafío

- Curso de programación BackEnd - CoderHouse

## Author

- Gisel Sthefania Paredes Alvarez

## Métodos node utilizados 

Instalación:
* npm init -y (e instalación de nodemon )
* npm install express
* Para visualización, en terminal: nodemon src/app.js

## Funcionamiento de los endpoints:
* Al acceder a http://localhost:8080/products, se obtienen todos los productos.
* Al visitar http://localhost:8080/products?limit=5, se muestran solo los primeros 5 productos.
* Al ingresar a http://localhost:8080/products/2, se muestra solo el producto con ID 2.
* Al probar con un ID inexistente, por ejemplo, http://localhost:8080/products/999, se devuelve un mensaje indicando que el producto no se encontró.

## Used by

Este proyecto es solamente de uso para ejemplo de clase, su estructura no puede ser o debiera ser tomada necesariamente como propuesta para un proyecto real.
Este proyecto es para cumplir con el tercer desafío, del curso de programación backend de coderhouse.