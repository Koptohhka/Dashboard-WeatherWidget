export const mfConfig = {
  name: "WeatherWidget",
  fileName: "WeatherWidget.js",
  exposes: {
    "./WeatherWidget": "./src/WeatherWidget.tsx"
  },
  shared: ["react", "react-dom"],
};
