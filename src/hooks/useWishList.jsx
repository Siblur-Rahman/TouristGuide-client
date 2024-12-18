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
    async () =>{
            const res = await axiosSecure.get(`/wishPackages/${user.email}`);
            return res.data
        }
              
    })
    return [wishPackage, refetch]
};

export default useWishList;