// ----------------------add ADDRESSS [/api/address/add]--------------

import Address from "../models/Address.js";

export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;

    await Address.create({ ...address, userId: req.userId });

    res.json({ success: true, message: " Address added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// ----------------GET ADDRESS----------------

export const getAddress = async (req, res) => {
  try {
    // const { userId } = req.body;

    const addresses = await Address.find({ userId: req.userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
