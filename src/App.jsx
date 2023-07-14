import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Classp from "./components/classp";

// delete the Pet component

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
