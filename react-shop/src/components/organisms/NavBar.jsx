import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link className="text-2xl font-bold text-blue-700" to="/">
          ShopEase
        </Link>

        <div className="flex flex-wrap gap-4 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login / Signup</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>
    </header>
  );
}