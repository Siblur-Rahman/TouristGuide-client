import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCarts = ({packageId}) => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    //  Tanstack Query
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
    queryFn: 
    async () =>{
            const res = await axiosSecure.get(`/cart/${packageId}`);
            return res.data
        }
              
    })
    return [cart, refetch]
};

export default useCarts;