export const getAllProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // console.log('fetching data form api data ', data.products);
        return data.products;

    } catch (error) {
        console.log(error);
        return [];


    }
}