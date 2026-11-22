import { Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/organisms/NavBar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";

function NotFoundPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <h1 className="text-3xl font-bold">Page not found</h1>

      <Link className="mt-4 inline-block text-blue-700 underline" to="/">
        Return home
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer className="mt-10 bg-slate-900 p-5 text-center text-white">
        ShopEase React demo
      </footer>
    </>
  );
}