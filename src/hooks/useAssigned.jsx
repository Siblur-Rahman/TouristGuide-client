import {useQuery} from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useAssigned = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    //  Tanstack Query
    const {refetch, data: assignedPackage = []} = useQuery({
        queryKey: ['assignedPackage', user?.email],
    queryFn: 
    async () =>{
            const res = await axiosSecure.get(`/assigned/${user?.email}`);
            return res.data
        }
              
    })
    return [assignedPackage, refetch]
};

export default useAssigned;