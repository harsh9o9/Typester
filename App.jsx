import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./routes/Body";
import Result from "./routes/Result";

const App = () => {
  let [theme, setTheme] = useState("");
  useEffect(() => {
    document.querySelector("html").className = theme;
  }, [theme]);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

window.$totalTime = 30;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
