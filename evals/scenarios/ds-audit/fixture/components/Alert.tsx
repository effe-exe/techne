export function Alert({ tone, text }: { tone: "info" | "error" | "success"; text: string }) {
  const c = { info: ["#EFF6FF", "#1D4ED8"], error: ["#FEF2F2", "#B91C1C"], success: ["#ecfdf5", "#047857"] }[tone];
  return <div role={tone === "error" ? "alert" : undefined} style={{ background: c[0], color: c[1], padding: "12px 14px", borderRadius: 7, fontSize: 14 }}>{text}</div>;
}
