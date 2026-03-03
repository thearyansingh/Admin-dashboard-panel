import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import axios from "axios";
import { toast } from "react-toastify";
const AddUsers = () => {
  

  const [formData, setformData] = useState({
    // name: "",
    // price: "",
    // description: "",
    // category: "",
    // discount: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:5000/api/user/addUser",
        formData,{withCredentials:true}
      );
   
        setLoading(!loading);
        console.log(data);
        toast.success("form submit");
      
    } catch (error) {
      console.log(error);
      toast.error("form not submitted");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-slate-400">Add product</h2>

      <form className="space-y-2" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            name="fullName"
            onChange={handleInput}
            value={formData.fullName}
            className="w-full border text-black p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Enter product price"
            className="w-full border text-black p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            placeholder="Enter product price"
            className="w-full border text-black p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Phone No
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInput}
            placeholder="Enter product price"
            className="w-full border text-black p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-600">Role</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInput}
            className="w-full border text-black p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="manager">manager</option>
            <option value="sales">sales</option>
            <option value="customer">customer</option>
            <option value="cashier">cashier</option>
          </select>
        </div>

        {/* <div>
          <label className="block mb-1 font-medium text-gray-600">
            Product Image
          </label>
          <input
            type="file"
            className="w-full border p-2 rounded-lg bg-gray-50"
          />
        </div> */}

        {/* <div>
          <label className="block mb-1 font-medium text-gray-600">
            Stock Quantity
          </label>
          <input
            type="number"
            placeholder="Enter stock quantity"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Adding..." : "Add Users"}
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
