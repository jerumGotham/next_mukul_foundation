export default function PlaceholderImage({
  width = 400,
  height = 300,
  text = "Image Placeholder",
  className = "",
}) {
  return (
    <div
      className={`placeholder-image ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: "linear-gradient(45deg, #f0f0f0, #e0e0e0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#666",
        fontSize: "14px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      {text}
    </div>
  );
}
