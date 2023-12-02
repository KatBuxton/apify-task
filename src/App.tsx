import { useState } from 'react';
import './App.css';
import {productsList} from "./products";

// Function to create mock responses and extract products
async function extractProducts(productsList: any[]): Promise<any[]> {

    // Simulate the API call limit by setting products per response:
    const productsPerResponse = 10;

    let offset = 0;
    let remainingProducts = productsList.slice(offset);
    let allMockResponses: any[] = [];

    // Loop until all products are covered
    while (remainingProducts.length > 0) {
        const currentProducts = remainingProducts.slice(0, productsPerResponse);

        // Create a mock response of the same format as the assignment example
        const mockResponse = {
            total: productsList.length,
            count: currentProducts.length,
            products: currentProducts,
        };

        // Accumulate the mock response
        allMockResponses.push(mockResponse);

        // Update offset for the next iteration
        offset += productsPerResponse;
        remainingProducts = productsList.slice(offset);
    }

    // Return all accumulated mock responses
    return allMockResponses;
}

// Call the function with the list of products to see how many iterations were run
const allMockResponses = await extractProducts(productsList);
console.log(allMockResponses);

// Extracting only the products from the responses
const allProducts = await extractProducts(productsList);
const combinedProducts = allProducts.flatMap(response => response.products);
console.log(combinedProducts);


// ------- Create an array of 1001 random products
interface Product {
    name: string;
    price: number;
}

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function generateRandomProduct(): Product {
    return {
        name: generateRandomString(10),
        price: Math.floor(Math.random() * 100000) + 1,
    };
}

function generateRandomProductsArray(count: number): Product[] {
    const products: Product[] = [];

    for (let i = 0; i < count; i++) {
        products.push(generateRandomProduct());
    }

    return products;
}

function App() {
    const [productsArray, setProductsArray] = useState<Product[]>([]);

    const generateProducts = () => {
        const generatedProducts = generateRandomProductsArray(1001);
        setProductsArray(generatedProducts);
    };

    return (
    <>
      <h1>Trying out the do-while cycle for the Apify assignment</h1>
      <div className="card">
          <button onClick={generateProducts}>
              Generate Products
          </button>
      </div>
        <ul>
            {productsArray.map((product, index) => (
                <li key={index}>{`Name: ${product.name}, Price: ${product.price}`}</li>
            ))}
        </ul>
    </>
  )
}

export default App
