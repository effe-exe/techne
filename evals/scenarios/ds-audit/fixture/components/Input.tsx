export function Input({ label, error }: { label: string; error?: string }) {
  return (
    <label style={{ display: "block", fontSize: 13, color: "#374151" }}>
      {label}
      <input style={{ display: "block", width: "100%", padding: "8px 12px", border: `1px solid ${error ? "#DC2626" : "#D1D5DB"}`, borderRadius: 6, fontSize: 16, marginTop: 6 }} />
      {error && <span style={{ color: "#dc2626", fontSize: 12 }}>{error}</span>}
    </label>
  );
}
