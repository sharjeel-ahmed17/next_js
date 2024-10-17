// 'use client';
// import React, { useEffect, useState } from 'react';
import { getAllProducts } from '@/services/getalluser';
import Product from '@/interfaces/product';
import ProductCard from '@/components/products/Card';

export default async function Products() {
    // const [products, setProducts] = useState<Product[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     // Define the async function inside useEffect
    //     const fetchProducts = async () => {
    //         try {
    //             const fetchedProducts = await getAllProducts();
    //             setProducts(fetchedProducts);
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProducts(); // Call the async function
    // }, []); // Empty dependency array to run only once

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // server component rendering


    const products: Product[] = await getAllProducts();
    console.log(products.length);

    return (
        <div className='grid grid-cols-4 '>
            {/* <h1>Products</h1> */}
            {/* <p>Total Products: {products.length}</p> */}
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
                // <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
