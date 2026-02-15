import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const ProductProvider = (props) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataExist, setDataExist] = useState(false);
  const [productData, setProductList] = useState([]);
  const Product = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/product/`);
      if (data.success === true) {
        console.log(data);
        if (data.total > 0) setDataExist(true);
        setProductList(data.products);
      } else setDataExist(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Product();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/product/deletePro/${id}`,
      );

      if (data.success === true) {
        console.log(data);
        Product();
        alert("product deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };


const value = {
  dataExist,
  productData,
  Product,
  deleteProduct,
  setProductList
};
return (
  <ProductContext.Provider value={value}>
    {props.children}
  </ProductContext.Provider>
);
}
export default ProductProvider;
