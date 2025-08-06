import toast from "react-hot-toast";

interface showCustomToastProps {
  message: string;
}

export const showCustomToast = ({ message }: showCustomToastProps) =>
  toast((t) => (
    <div
      style={{
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        backgroundColor: "#28a745",
        borderRadius: "8px",
        padding: "12px 16px",
        fontWeight: 500,
      }}
    >
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={() => toast.dismiss(t.id)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          marginLeft: "12px",
        }}
        aria-label="Fechar toast"
      >
        ✕
      </button>
    </div>
  ));
