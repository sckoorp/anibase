/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue"
    ],
    theme: {
        extend: {
            fontFamily: {
                outfit: ["Outfit", "sans-serif"]
            },
            colors: {
                background: "#0E0E11",
                dark: "#09090B",
                light: "#F4F4F5",
                prime: "#92CACE"
            }
        }
    },
    plugins: []
}