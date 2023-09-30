import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Blog from "./Components/Pages/Blog";
import Register from "./Components/Pages/Auth/Register";
import Login from "./Components/Pages/Auth/Login";
import BlogDetails from "./Components/Pages/BlogDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
