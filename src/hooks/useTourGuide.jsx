import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useTourGuide = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isTourGuide, isPending: isTourGuideLoading} = useQuery({
        queryKey: [user?.email, 'isTourGuide'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await  axiosSecure.get(`/user/tourguide/${user.email}`);
            
            return res.data?.tourguide;
        }
        })
        return [isTourGuide, isTourGuideLoading]
};

export default useTourGuide;