import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSecureData = (api) =>{

    const axiosSecure = useAxiosSecure();

    const {data: secureData, isPending: loading, refetch} = useQuery({
        queryKey:['secureData'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`${api}`
          );
            return res.data
        }
    });
return [secureData, loading, refetch]
}

export default useSecureData;