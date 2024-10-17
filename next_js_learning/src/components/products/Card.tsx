import Product from "@/interfaces/product";
interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <h2 className='mt-2 text-3xl bg-red-200'>{product.title}</h2>
            <h2 className='mt-2 text-3xl border border-red-900'>{product.description}</h2>
        </div>
    );
}
