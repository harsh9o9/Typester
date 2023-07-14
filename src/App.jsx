import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./routes/Body";
import Result from "./routes/Result";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
    // <>
    //   <Header />
    //   <Body />
    // </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
