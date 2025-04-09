import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../contexts/AppContext";
import toast from "react-hot-toast";

export const InputField = ({
  type,
  placeholder,
  name,
  handleChange,
  address,
}) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none
         text-gray-500 focus:border-primary transition"
    type={type}
    value={address[name]}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    required
  />
);

const AddAddress = () => {
  const { axios, navigate, user } = useAppContext();
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/address/add", { address });

      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, []);
  return (
    <div className="my-16">
      <p className="text-2xl md:text-3xl text-gray-500 ">
        Add Shipping <span>Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form className=" space-y-3 mt-6 text-sm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="email"
                type="email"
                placeholder="Email address"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="street"
                type="text"
                placeholder="Street"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="number"
                placeholder="Zip code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>
            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="text"
              placeholder="Phone number"
            />
            <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
              Save Address
            </button>
          </form>
        </div>
        <img src={assets.address} alt="" width={24} />
      </div>
    </div>
  );
};

export default AddAddress;
