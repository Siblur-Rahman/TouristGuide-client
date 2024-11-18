import axios from "axios";
import useAuth from "./useAuth";



export const axiosSecure = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
});import { useNavigate } from 'react-router-dom';



const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    // request interceptors to add authorization header for very secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        // console.log('test', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;



// import axios from "axios";



// export const axiosSecure = axios.create({
//     baseURL: `${import.meta.env.VITE_API_URL}`
// });


// const useAxiosSecure = () => {
    
//     return axiosSecure;
// };

// export default useAxiosSecure;