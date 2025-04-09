import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AppContext } from "../contexts/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
    axios,
  } = useContext(AppContext);

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      return navigate("/products");
    } else {
      return navigate("/");
    }
  }, [searchQuery]);
  return (
    <nav
      className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b
     border-gray-300 bg-white relative transition-all"
    >
      <NavLink to={"/"} onClick={() => setOpen(false)}>
        <img
          className="h-9 cursor-pointer"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="dummyLogoColored"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>All Products</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        {!user ? (
          <button
            onClick={() => {
              setOpen(false), setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary
             hover:bg-primary-dull transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button className="cursor-pointer relative group">
            <img
              src={assets.profile}
              alt=""
              width={30}
              className="cursor-pointer"
            />
            <ul
              className="hidden cursor-pointer group-hover:block absolute top-8 right-0 bg-white shadow border 
            border-gray-200 py-2.5 w-40 text-sm rounded-md  z-30"
            >
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer z-1"
              >
                My orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 cursor-pointer hover:bg-primary/10  z-1"
              >
                Logout
              </li>
            </ul>
          </button>
        )}
      </div>

      <div className="flex items-center gap-6 sm:hidden">
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className=""
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } z-10  absolute top-[60px] left-0  w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to={"/"} className="block" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className="block"
            onClick={() => setOpen(false)}
          >
            All Products
          </NavLink>
          {user ? (
            <NavLink to={"/"} className="block" onClick={() => setOpen(false)}>
              My orders
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            to={"/contact"}
            className="block"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false), setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button className="cursor-pointer relative group">
              <img
                src={assets.profile}
                alt=""
                width={30}
                className="cursor-pointer"
              />
              <ul
                className="hidden cursor-pointer group-hover:block absolute top-8 right-0 bg-white shadow border 
            border-gray-200 py-2.5 w-40 text-sm rounded-md m-0"
              >
                <li
                  onClick={() => navigate("my-orders")}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer z-1"
                >
                  My orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-3 cursor-pointer hover:bg-primary/10  z-1"
                >
                  Logout
                </li>
              </ul>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
