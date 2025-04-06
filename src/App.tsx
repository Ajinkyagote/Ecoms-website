import Maincontent from "./components/Maincontent";
import ProductPage from "./components/ProductPage";
import Sidebar  from "./components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopSeller from "./components/TopSeller";
import PopularBlogs from "./components/PopularBlogs";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<Maincontent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>

        <div>
          <TopSeller />
          <PopularBlogs />
        </div>
      </div>
    </Router>
    
  );
}

export default App