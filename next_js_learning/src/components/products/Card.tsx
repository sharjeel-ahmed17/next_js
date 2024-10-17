
import Product from "@/interfaces/product";
import Button from "./Button";
interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex ">

            <div className="w-[300px] mx-auto bg-green-300 p-4 mb-4">
                <h2 className='mt-2 text-3xl bg-red-200'>{product.title}</h2>
                <h2 className='mt-2 text-3xl border border-red-900'>{product.description}</h2>
                <Button productId={product.id} />
                {/* <button onClick={() => alert()}>print</button> */}
            </div>
        </div>
    );
}
