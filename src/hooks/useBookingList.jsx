import {useQuery} from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useBookingList = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    //  Tanstack Query
    const {refetch, data: bookingPackage = []} = useQuery({
        queryKey: ['bookingPackage', user?.email],
    queryFn: 
    async () =>{
            const res = await axiosSecure.get(`/booking/${user?.email}`);
            return res.data
        }
              
    })
    return [bookingPackage, refetch]
};

export default useBookingList;