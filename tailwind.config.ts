import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { terracotta: "#C2703E", sand: "#F5F1E8", sandDark: "#E8DDD0", forest: "#1B4332", charcoal: "#1C1C1C" }}},
  plugins: [],
}; export default config;
