import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import Sidebar from "./component/Sidebar/Sidebar"
import Home from "./pages/Home/Home"
import User from "./pages/User/User"
import Users from "./pages/Users/Users"
import Product from "./pages/Product/Product"
import Products from "./pages/Products/Products"
function App() {

  return (
    <BrowserRouter>
      <div className="bg-[#2a3447] text-white">
        <Navbar />
        <div className="flex gap-4">
          <div className="w-[250px] border-r border-[#384256] px-4 py-1 lg:max-w-max">
              <Sidebar />
          </div>
          <div className="py-[5px] px-5 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/products" element={<Product />} />
              <Route path="/products/:id" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
