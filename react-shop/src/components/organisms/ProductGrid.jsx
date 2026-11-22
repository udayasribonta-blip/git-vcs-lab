import ProductCard from "../molecules/ProductCard";

export default function ProductGrid({ products, onAdd }) {
  if (products.length === 0) {
    return <p className="text-slate-600">No products match your search.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}