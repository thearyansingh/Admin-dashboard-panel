import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setAuth, auth }) => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/user/login`, formData,{ withCredentials: true });
      console.log(res.data);
      if (res.data.userData) {
        setAuth(true);
        console.log(auth)
        navigate("/listProduct");
        toast.success("login successfull");
      }
    } catch (error) {
      console.log(error);
      toast.error("login failed");
    }
  };
  console.log(auth);
  return (
    <div className="min-h-screen  flex items-center justify-center bg-blue-400 px-4 overflow-y-auto">
      <div className="w-full max-w-4xl  bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-blue-50 flex flex-col justify-center items-start p-10 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Make supplies accessible <br />
            anytime, anywhere — <br />
            with{" "}
            <span className="text-blue-600 font-extrabold">
              Product Shopper.
            </span>
          </h2>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-store-illustration-download-in-svg-png-gif-file-formats--shop-ecommerce-buying-purchase-pack-business-illustrations-2912020.png"
            alt="Illustration"
            className="mt-10 w-full max-w-sm"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Product <span className="text-blue-600">Shopper</span>
          </h3>

          <h2 className="text-2xl font-bold mt-4 text-gray-900">
            Let's Get Started
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Please enter your details to create an account.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                placeholder="Enter Email Address"
                className="w-full mt-1 px-4 py-2 border text-black rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                placeholder="Enter Full Name"
                className="w-full mt-1 px-4 py-2 border text-black rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500">
              Account not exist?{" "}
              <span className="text-blue-600 cursor-pointer">Sign up</span>
            </p>

            <div className="flex items-center gap-3">
              <hr className="flex-1" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-1" />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  className="w-4"
                  alt="Google"
                />
                Sign in with Google
              </button>

              <button className="flex-1 border py-2 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                  className="w-4"
                  alt="Microsoft"
                />
                Sign in with Microsoft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
