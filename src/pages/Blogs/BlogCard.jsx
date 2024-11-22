
import { FaUser } from 'react-icons/fa';
const BlogCard = ({blog}) => {
    const {title, content, author, date, tags}=blog;
    return (
        <div className="border-2 border-t-black my-10 p-4">
            <h2 className="text-2xl pl-2 text-center my-2 font-bold">{title}</h2>
            <div className="flex justify-between">
                <div className='flex text-xl'><FaUser className=''/> <span className='-mt-1'> {author}</span></div> <span className='bg-cyan-200'>{date}</span>
            </div>
            <div className='flex justify-between my-3'>
                {tags?.map((tag, index)=><span key={index} className='bg-cyan-200'>{tag}</span>)}
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default BlogCard;