import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cocktails from "./pages/Cocktails";
import CocktailShow from "./pages/CocktailShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:id" element={<CocktailShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
