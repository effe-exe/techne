export function Button({ kind = "primary", children }: { kind?: "primary" | "secondary" | "danger"; children: React.ReactNode }) {
  const styles = {
    primary: { background: "#2563EB", color: "#fff", padding: "10px 18px", borderRadius: 8, fontSize: 15 },
    secondary: { background: "#F1F5F9", color: "#334155", padding: "9px 16px", borderRadius: 6, fontSize: 14 },
    danger: { background: "#e11d48", color: "#fff", padding: "10px 18px", borderRadius: 10, fontSize: 15 },
  }[kind];
  return <button style={styles}>{children}</button>;
}
