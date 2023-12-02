import axios, {AxiosResponse} from 'axios';

interface Product {
    name: string;
    price: number;
    // Potential other props
}

interface ApiResponse {
    total: number;
    count: number;
    products: Product[];
}

async function extractProducts(
    // minPrice: number,
    // maxPrice: number
): Promise<Product[]> {
    const apiUrl = 'https://api.ecommerce.com/products';
    let products: Product[] = [];
    let totalProducts: number = 0;
    let offset: number = 0;

    // Loop until all products are retrieved
    do {
        try {
            const response: AxiosResponse<ApiResponse> = await axios.get(apiUrl, {
                params: {
                    // Possibility to add the price range parameters here:
                    // minPrice,
                    // maxPrice,
                    offset
                },
            });

            const {total, count, products: returnedProducts} = response.data;

            products = products.concat(returnedProducts);

            // Update totalProducts and offset for the next iteration
            totalProducts = total;
            offset += count;

        } catch (error) {
            console.error("Error making API call:", error);
        }

    } while (offset < totalProducts);

    return products;
}

// const minPrice = 0;
// const maxPrice = 1000;
const result = await extractProducts(
    // minPrice,
    // maxPrice
);
console.log(result);
