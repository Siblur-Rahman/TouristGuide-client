import {useQuery} from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useWishList = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    //  Tanstack Query
    const {refetch, data: wishPackage = []} = useQuery({
        queryKey: ['wishPackage', user?.email],
    queryFn: 
    // fetch(`${import.meta.env.VITE_API_URL}/wishPackages`)
    // .then(res => res.json())
    async () =>{
            const res = await axiosSecure.get(`/wishPackages?email=${user.email}`);
            return res.data
        }
              
    })
    return [wishPackage, refetch]
};

export default useWishList;