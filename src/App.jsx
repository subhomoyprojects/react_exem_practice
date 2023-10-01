import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Blog from "./Components/Pages/Blog";
import Register from "./Components/Pages/Auth/Register";
import Login from "./Components/Pages/Auth/Login";
import BlogDetails from "./Components/Pages/BlogDetails";
import BlogSearch from "./Components/Pages/BlogSearch";
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
          <Route path="/blogsearch" element={<BlogSearch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
