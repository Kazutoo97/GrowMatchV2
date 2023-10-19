/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOne: "#CBF9DC",
        primaryThree: "#CBF9DC",
        primaryFive: "#079273",
        primarySeven: "#026966",
        primaryNine: "#013946",
        mainColor: "#0ea5e9",
      },
      boxShadow: {
        "3xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
