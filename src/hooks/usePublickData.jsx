import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePublickData = (api) =>{

    const axiosPublic = useAxiosPublic();

    const {data: publicData, isPending: loading, refetch} = useQuery({
        queryKey:['publicData'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`${api}`
          );
            return res.data
        }
    });
return [publicData, loading, refetch]
}

export default usePublickData;