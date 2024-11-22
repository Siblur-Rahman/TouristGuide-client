import usePublicData from "../../hooks/usePublickData";
import BlogCard from "./BlogCard";


const Blogs = () => {
    const [publicData]= usePublicData('/blogs')
    return (
        <div>
            {publicData?.map((blog, index)=><BlogCard key={index} blog={blog}></BlogCard>)}
        </div>
    );
};

export default Blogs;