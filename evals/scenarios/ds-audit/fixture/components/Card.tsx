export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#ffffff", border: "1px solid #E5E7EB", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 10 }}>{title}</h3>
      <div style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
