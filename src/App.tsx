import ReactDOM from "react-dom/client";
import WeatherWidget from "./WeatherWidget";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<WeatherWidget />);