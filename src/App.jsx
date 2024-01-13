import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;