import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();

const currency = import.meta.env.VITE_CURRENCY;

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // --------------fetch seller status-----------
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };

  // --------fetch user auth ---------------

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error) {
      setUser(null);
    }
  };

  // ----------------fetch user status----------------

  const addToCart = (itemId) => {
    let cardData = structuredClone(cartItems);

    if (cardData[itemId]) {
      cardData[itemId] += 1;
    } else {
      cardData[itemId] = 1;
    }
    setCartItems(cardData);
    toast.success("Add to Cart");
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.messsage);
      }
    } catch (error) {
      toast.error(error.messsage);
    }
  };

  const updateCartItem = (itemId, quantity) => {
    let cardData = structuredClone(cartItems);
    cardData[itemId] = quantity;
    setCartItems(cardData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cardData = structuredClone(cartItems);
    if (cardData[itemId]) {
      cardData[itemId] -= 1;
      if (cardData[itemId] === 0) {
        delete cardData[itemId];
      }
    }
    toast.success("Removed from cart");
    setCartItems(cardData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (let item in cartItems) {
      totalCount += cartItems[item];
    }

    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.offeredPrice * cartItems[items];
      }

      return Math.floor(totalAmount * 100) / 100;
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchSeller();
    fetchUser();
  }, []);

  // update cart database
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartItems });

        if (!data.success) {
          toast.error(data.messsage);
        }
      } catch (error) {
        toast.error(error.messsage);
      }
    };

    if (user) {
      updateCart();
    }
  }, [cartItems]);

  const value = {
    updateCartItem,
    removeFromCart,
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    setProducts,
    currency,
    addToCart,
    cartItems,
    setCartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    axios,
    fetchProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
