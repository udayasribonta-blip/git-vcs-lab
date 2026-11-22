import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../store/cartSlice";
import ProductGrid from "../components/organisms/ProductGrid";

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <section className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-400 p-8 text-white md:p-14">
        <h1 className="mb-4 text-4xl font-bold">
          Everyday essentials, made easy.
        </h1>
        <p className="mb-6 text-lg">
          Explore useful finds for work, travel, and home.
        </p>
        <Link
          className="rounded-lg bg-white px-5 py-3 font-bold text-blue-700"
          to="/products"
        >
          Browse products
        </Link>
      </section>

      <h2 className="mb-5 text-2xl font-bold">Featured Products</h2>

      <ProductGrid
        products={products.slice(0, 3)}
        onAdd={(product) => dispatch(addToCart(product))}
      />
    </main>
  );
}