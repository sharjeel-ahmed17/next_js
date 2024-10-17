'use client'
// import Product from "@/interfaces/product"
interface ButtonProps {
    productId: string;
}
export default function Button({ productId }: ButtonProps) {
    return (
        <button onClick={() => alert(productId)} className="bg-red-600 p-4 ">Click me</button>
    )
}
