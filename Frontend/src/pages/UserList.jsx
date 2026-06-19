import React, { useEffect, useState } from "react";
import API from "../API/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate()
  const fetchUsers = async () => {
    try {
      const { data } = await API.get("/api/user/getAllUser");
      setUsers(data.users);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <>
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold mb-6 text-slate-400">Product Listing</h2>

        <div class="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search product..."
            class="border px-4 py-2 text-slate-500 rounded-lg w-64"
          />

          <div class="space-x-4">
            <select class="px-4 py-2 border-2 text-black">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>

            <button  onClick={()=>navigate("/addUsers")} class="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              + Add Users
            </button>
          </div>
        </div>

        <table class="w-full border text-left text-slate-700">
          <thead class="bg-slate-400 text-slate-700">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Full Name</th>
              <th class="p-3">email</th>
              <th class="p-3">Phone number</th>
              <th class="p-3">role</th>
              <th class="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item, index) => (
              <tr key={item.id} class="border-b text-slate-700">
                <td class="p-3">{index + 1}</td>
                <td class="p-3">{item.fullName}</td>
                <td class="p-3">{item.email}</td>
                <td class="p-3">{item.phoneNumber}</td>
                <td class="p-3">{item.role}</td>

                <td class="p-3 text-blue-600 cursor-pointer">
                  <div class="flex gap-4">
                    <p>Edit</p>
                    <p>Delete</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div class="flex justify-between items-center mt-3">
          <div class="space-x-3">
            <button class="bg-blue-400 text-white text-sm py-3 px-4 rounded-lg">
              Previous
            </button>

            <button class="bg-blue-400 text-white text-sm py-3 px-4 rounded-lg">
              Next
            </button>
          </div>

          <p class="text-black text-sm py-3 px-4 rounded-lg">1 page to 2</p>
        </div>
      </div>
    </>
  );
};

export default UserList;
