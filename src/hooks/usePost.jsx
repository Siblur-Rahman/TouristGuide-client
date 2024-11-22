import useAxiosSecure from './useAxiosSecure';

const usePost = () => {
    const axiosSecure = useAxiosSecure();
    const Post = (data) =>{
                axiosSecure.post('/contact', data)
                .then(res =>{console.log(res.data)})
            }

    return [Post]
};

export default usePost;
