import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
