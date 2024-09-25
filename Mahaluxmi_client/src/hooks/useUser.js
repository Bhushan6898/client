import { useState } from "react";
 import { toast } from "react-toastify";
import UserRepository from "../repository/userRepository";
import { useNavigate } from "react-router-dom";
import { logOut, login} from "../store/auth/reduser.slice";
import { useDispatch } from "react-redux";

const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const route = useNavigate();
  const dispatch = useDispatch();
  const [userData,setUserData]=useState();
  const [productData,setProductData]=useState();
  return {
    userData,
    productData,
    AddClientDetails: async (payload) => {
      try {
        const response = await UserRepository.AddClients(payload);
        if (response.status === 200) {
          toast.success(response.data?.message);
          setLoading(true);
         
          return response;
        } if(response.response.status === 401){
          toast.warn(response.response.data?.message);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    Login: async (payload) => {
      try {
        const response = await UserRepository.Loginhere(payload);
        if (response.status === 200) {
          const role=response.data.user.role;
          const id=response.data.user._id;
          dispatch(login(role,id))
          toast.success(response.data?.message);


          setLoading(true);
           route("/home")
          return response;
        } if(response.response.status === 401){
          toast.warn(response.response.data?.message);
          
        }
      } catch (error) {
        console.log(error);
      }
    },
    ProfileDetails: async () => {
      try {
        const response = await UserRepository.getProfile();
        console.log(response);
        
        if (response.status === 200) {
          setUserData(response.data?.user)
          setLoading(true);
          return response;
        } if(response.response.status === 401){
          toast.warn(response.response.data?.message);
          
        }
      } catch (error) {
        console.log(error);
      }
    },
    AddProduct: async (payload) => {
      try {
        const response = await UserRepository.postPRODUCT(payload);
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data?.message);

          setLoading(true);
        
          return response;
        } if(response.response.status === 401){
          toast.warn(response.response.data?.message);
          
        }
      } catch (error) {
        console.log(error);
      }
    },
    Product: async () => {
      try {
        const response = await UserRepository.getProduct();
        console.log(response);
        
        if (response.status === 200) {
          setProductData(response.data?.product)
          setLoading(true);
          return response;
        } if(response.response.status === 401){
          toast.warn(response.response.data?.message);
          
        }
      } catch (error) {
        console.log(error);
      }
    },

  };
};

export default useAdmin;
