import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useAuth =() => {
  const [user,setUser]=useState(()=>{
    const data=localStorage.getItem("userData")
    return data?JSON.parse(data):{}
  });
  const fetchUser = async () => {
    const API_URL = import.meta .env.VITE_API_BASE_URL;
    try {
      const {data} = await axios.get(`${API_URL}/api/user/authMe`, {
        withCredentials: true,
      });
      setUser(data.userData)
    
    } catch (error) {
      console.log(error);
    }
  };


 useEffect(()=>{
 fetchUser()
 },[])

 useEffect(() => {
  localStorage.setItem("userData",JSON.stringify(user))
 }, [user])
 
 return {fetchUser,user,setUser}
};


export default useAuth;
