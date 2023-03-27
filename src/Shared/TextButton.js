import Button from "./Button";

const TextButton = ({ children, sx, ...props }) => (
  <Button
    variant="text"
    sx={{
      minWidth: "unset",
      background: "unset",
      border: "unset",
      color: "#3d3e3f",
      width: "100px",
      height: "2.5em",
      ...(Array.isArray(sx) ? sx : [sx]),
    }}
    {...props}
  >
    {children}
  </Button>
);

export default TextButton;
