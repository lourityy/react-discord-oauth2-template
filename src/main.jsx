import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { process } from "process";
window.process = process;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
// lourity