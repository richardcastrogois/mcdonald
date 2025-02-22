import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // Atualiza as URLs das imagens apenas no cliente
    setImageUrls(products.map((product) => product.imageUrl));
  }, [products]);

  return (
    <div className="space-y-3 px-5">
      {products.map((product, index) => (
        <Link
          key={product.id}
          href="/"
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            {/* Garantindo que a imagem só seja exibida após ser definida */}
            {imageUrls[index] && (
              <Image
                src={imageUrls[index]}
                alt={product.name}
                fill
                sizes="120px"
                priority
                className="rounded-lg object-contain"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
