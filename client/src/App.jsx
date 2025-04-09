import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import Login from "./components/Login";
import AllProducts from "./routes/AllProducts";
import ProductCategory from "./routes/ProductCategory";
import ProductDetail from "./routes/ProductDetail";
import CartPage from "./routes/CartPage";
import AddAddress from "./routes/AddAddress";
import MyOders from "./routes/MyOders";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./routes/seller/SellerLayout";
import AddProduct from "./routes/seller/AddProduct";
import ProductList from "./routes/seller/ProductList";
import Orders from "./routes/seller/Orders";
import Loading from "./components/Loading";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useContext(AppContext);

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOders />} />
          <Route path="/seller/loader" element={<Loading />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  );
}

export default App;
