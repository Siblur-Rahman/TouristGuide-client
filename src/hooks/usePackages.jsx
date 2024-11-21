import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePackages = () =>{

    const axiosPublic = useAxiosPublic();

    const {data: packages = [], isPending: loading, refetch} = useQuery({
        queryKey:['packages'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/packages'
          );
            return res.data
        }
    });
return [packages, loading, refetch]
}

export default usePackages;