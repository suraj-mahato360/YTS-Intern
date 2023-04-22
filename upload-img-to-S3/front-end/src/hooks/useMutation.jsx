import React, { useState } from "react";
import axiosClient from "../config/axios";

const useMutation = ({ url, method = "POST" }) => {
  const toast = () =>{
    return (
      <div className="top-0">
      <p>{toast.title}</p>
      <p>{toast.status}</p>
      </div>
    )
  }
  const [state, setState] = useState({
    isLoading: false,
    error: "",
  });

  const fn = async (data) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    axiosClient({ url, method, data })
      .then(() => {
        setState({ isLoading: false, error: "" });
        toast({
          title: 'Successfully Added Image',
          status: 'success',
          duration: 2000,
          postion: 'top',
        })
      })
      .catch((error) => {
        setState({ isLoading: false, error: error.message });
      });
  };
  return { mutate: fn, ...state };
};

export default useMutation;
