import Button from "@mui/material/Button";

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <Button
      variant="contained"
      type={type}
      onClick={onClick}
      disabled={disabled}
      sx={{ textTransform: "none", borderRadius: "8px" }}
    >
      {children}
    </Button>
  );
}