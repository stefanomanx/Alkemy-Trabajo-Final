// Este archivo contiene la definición de los productos disponibles. Los productos pueden ser obtenidos desde una API externa o ser definidos localmente.

/* import axios from 'axios';

// Exportar un array vacio la primera vez
export const PRODUCTS = [];

const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log('Fetched data:', response.data);

    const filteredProducts = response.data.filter((item) => {
      return (
        item.category === "men's clothing" || item.category === "women's clothing"
      );
    });
    
    console.log('Filtered products:', filteredProducts);

    const PRODUCTS = filteredProducts.map(product => ({
      id: product.id,
      productName: product.title,
      price: product.price,
      productImage: product.image,
    }));

    console.log('Products:', PRODUCTS);

    return PRODUCTS;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

// Llamar a getProducts y actualizar PRODUCTS cuando se reciba los datos
getProducts()
  .then(data => {
    PRODUCTS.push(...data);
  })
  .catch(error => {
    // En caso de error, mostrarlo en la consola
    console.error('Error fetching products: ', error);
  });

console.log(PRODUCTS);
*/

import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.webp";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";

// Array que contiene la lista de productos disponibles. Cada producto tiene un identificador único, nombre, precio e imagen asociada.

export const PRODUCTS = [
  {
    id: 1,
    productName: "Remera I Need VANS",
    price: 150.0,
    productImage: product1,
  },
  {
    id: 2,
    productName: "Remera Vans Warpig Motorhead",
    price: 99.0,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Pantalones Authentic Chino Slim Pant",
    price: 199.0,
    productImage: product3,
  },
  {
    id: 4,
    productName: "Campera Jean WLS Van Gogh",
    price: 200.0,
    productImage: product4,
  },
  {
    id: 5,
    productName: "Medias Vans Coastal Sock",
    price: 15.0,
    productImage: product5,
  },
  {
    id: 6,
    productName: "Remera SPECTRUM LS",
    price: 70.0,
    productImage: product6,
  },
  {
    id: 7,
    productName: "Remera Golf Wang Auto Service",
    price: 120.0,
    productImage: product7,
  },
  {
    id: 8,
    productName: "Gorra Don't Trip Unstructured",
    price: 40.0,
    productImage: product8,
  },
];
