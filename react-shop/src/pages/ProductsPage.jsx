import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../store/cartSlice";
import ProductGrid from "../components/organisms/ProductGrid";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <h1 className="mb-5 text-3xl font-bold">Product Catalog</h1>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products"
          aria-label="Search products"
        />

        <select
          className="rounded-lg border border-slate-300 bg-white px-4 py-3"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <ProductGrid
        products={filteredProducts}
        onAdd={(product) => dispatch(addToCart(product))}
      />
    </main>
  );
}