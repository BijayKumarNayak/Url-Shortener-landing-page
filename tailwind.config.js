/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradiant": "linear-gradient(90deg, #F87516 16%, #5E11FF 43%)",
      },
      boxShadow: {
        custom: "0px 3px 8px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
