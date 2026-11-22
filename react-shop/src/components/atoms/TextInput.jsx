export default function TextInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  minLength,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1 block font-semibold">
        {label}
      </label>
      <input
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2"
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
      />
    </div>
  );
}