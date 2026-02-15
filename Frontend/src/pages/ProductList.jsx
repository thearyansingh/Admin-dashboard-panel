import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
const ProductList = () => {
  const { dataExist, productData, Product, deleteProduct } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [pageData, setPerPageData] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search]);

  let filteredData = productData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filteredData);

  let totalPage = Math.ceil(filteredData.length / pageData);
  let lastIndex = page * pageData;
  let firstIndex = lastIndex - pageData;
  let finalData = filteredData.slice(firstIndex, lastIndex);

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (page < totalPage) setPage(page + 1);
  };

  return (
    <>
      {dataExist ? (
        <div className="bg-white   rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-slate-400">
            Product Listing
          </h2>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              value={search}
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search product..."
              className="border px-4 py-2 text-slate-500 rounded-lg w-64"
            />

            <div className="space-x-4">
              <select
                className="px-4 py-2 border-2 text-black "
                onChange={(e) => setPerPageData(e.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <button
                onClick={() => navigate("/addProduct")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                + Add Product
              </button>
            </div>
          </div>
          <table className="w-full border text-left text-slate-700 ">
            <thead className="bg-slate-400  text-slate-700 ">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Description</th>
                <th className="p-3">Category</th>
                <th className="p-3">discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            {finalData.length > 0 ? (
              <tbody>
                {finalData?.map((data, index) => {
                  return (
                    <tr key={data._id} className="border-b text-slate-700">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{data.name}</td>
                      <td className="p-3">${data.price}</td>
                      <td className="p-3">{data.description}</td>
                      <td className="p-3">{data.category}</td>
                      <td className="p-3">${data.discount}</td>

                      <td className="p-3 text-blue-600 cursor-pointer">
                        <div className="flex gap-4">
                          <p>edit</p>
                          <p onClick={() => deleteProduct(data._id)}>delete</p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <p>No data exist</p>
            )}
          </table>
          <div className="flex justify-between items-center mt-3">
            <div className="space-x-3">
              <button
                onClick={prevPage}
                className="bg-blue-400 text-white text-sm  py-3  px-4 rounded-lg "
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="bg-blue-400 text-white text-sm  py-3  px-4 rounded-lg "
              >
                Next
              </button>
            </div>

            <p className=" text-black text-sm  py-3  px-4 rounded-lg ">
              {page} page to {totalPage}
            </p>
          </div>
        </div>
      ) : (
        <button className="bg-blue-400 text-white p-2 rounded-lg text-xl">
          {" "}
          add Product
        </button>
      )}
    </>
  );
};

export default ProductList;
