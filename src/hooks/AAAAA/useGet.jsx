import { useEffect, useState } from 'react';
import useAxiosSecure from '../useAxiosSecure';

const useGet = (api) => {
    const [data, setData] = useState()
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.post(`${api}`)
                .then(res =>{setData(res.data)})
    })

    return [data]
};

export default useGet
