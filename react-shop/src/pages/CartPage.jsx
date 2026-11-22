import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../components/atoms/PrimaryButton";
import {
  changeQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-4xl px-5 py-8">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>

      {items.length === 0 ? (
        <p className="rounded-xl bg-white p-6">Your cart is empty.</p>
      ) : (
        <section className="space-y-4">
          {items.map((item) => (
            <article
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-sm"
              key={item.id}
            >
              <div>
                <h2 className="text-lg font-bold">
                  {item.icon} {item.name}
                </h2>
                <p>₹{item.price.toLocaleString("en-IN")} each</p>
              </div>

              <div className="flex items-center gap-3">
                <PrimaryButton
                  onClick={() =>
                    dispatch(changeQuantity({ id: item.id, amount: -1 }))
                  }
                >
                  −
                </PrimaryButton>

                <span>{item.quantity}</span>

                <PrimaryButton
                  onClick={() =>
                    dispatch(changeQuantity({ id: item.id, amount: 1 }))
                  }
                >
                  +
                </PrimaryButton>

                <PrimaryButton
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </PrimaryButton>
              </div>
            </article>
          ))}

          <p className="text-xl font-bold">
            Total: ₹{total.toLocaleString("en-IN")}
          </p>

          <PrimaryButton onClick={() => dispatch(clearCart())}>
            Clear cart
          </PrimaryButton>
        </section>
      )}
    </main>
  );
}