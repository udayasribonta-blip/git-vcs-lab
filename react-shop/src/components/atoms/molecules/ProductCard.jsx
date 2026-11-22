import PrimaryButton from "../atoms/PrimaryButton";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div
        className="grid h-36 place-items-center bg-indigo-50 text-6xl"
        role="img"
        aria-label={product.name}
      >
        {product.icon}
      </div>

      <div className="space-y-3 p-4">
        <p className="text-sm text-blue-700">{product.category}</p>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.description}</p>
        <p className="font-bold text-blue-700">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
        <PrimaryButton onClick={() => onAdd(product)}>
          Add to cart
        </PrimaryButton>
      </div>
    </article>
  );
}