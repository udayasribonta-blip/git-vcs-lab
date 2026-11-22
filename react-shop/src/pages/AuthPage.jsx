import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/atoms/PrimaryButton";
import TextInput from "../components/atoms/TextInput";

function AuthForm({ mode, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (mode === "Signup" && password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    onSuccess();
  }

  return (
    <form
      className="mt-5"
      onSubmit={handleSubmit}
      onInvalid={() => setMessage("")}
    >
      {mode === "Signup" && (
        <TextInput
          label="Full name"
          id="full-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      )}

      <TextInput
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <TextInput
        label="Password (at least 8 characters)"
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength={8}
        required
      />

      {mode === "Signup" && (
        <TextInput
          label="Confirm password"
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          minLength={8}
          required
        />
      )}

      <PrimaryButton type="submit">{mode}</PrimaryButton>

      {message && <p className="mt-4 text-red-700">{message}</p>}

      <p className="mt-4 text-sm text-slate-600">
        Demo only: this form does not create or authenticate real accounts.
      </p>
    </form>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState("Login");
  const navigate = useNavigate();

  function handleSuccess() {
    if (mode === "Signup") {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        return;
      }
    }

    navigate("/");
  }

  return (
    <main className="mx-auto max-w-xl px-5 py-10">
      <section className="rounded-2xl bg-white p-7 shadow">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome to ShopEase
        </h1>

        <div className="mt-5 flex gap-3">
          <PrimaryButton onClick={() => setMode("Login")}>
            Login
          </PrimaryButton>

          <PrimaryButton onClick={() => setMode("Signup")}>
            Signup
          </PrimaryButton>
        </div>

        <AuthForm
          key={mode}
          mode={mode}
          onSuccess={handleSuccess}
        />
      </section>
    </main>
  );
}