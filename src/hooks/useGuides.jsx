import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGuides = () => {
    const [guides, setGuides] = useState([])
    const axiosPublic = useAxiosPublic();
useEffect(()=>{
    axiosPublic.get('/guides')
    .then(res=>{
        setGuides(res?.data)
    })
},[guides])
return [guides]
};

export default useGuides;