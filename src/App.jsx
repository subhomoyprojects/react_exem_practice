import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Register from "./Components/Pages/Auth/Register";
import Login from "./Components/Pages/Auth/Login";

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
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
