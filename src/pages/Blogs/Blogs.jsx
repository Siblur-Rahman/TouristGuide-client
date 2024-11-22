import usePublickData from "../../hooks/usePublickData";


const Blogs = () => {
    const [publicData]= usePublickData('/blogs')
    return (
        <div>
            {publicData?.map((blog, index)=><div key={index}>{blog?._id}</div>)}
        </div>
    );
};

export default Blogs;