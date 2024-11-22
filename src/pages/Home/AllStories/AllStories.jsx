import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import usePublicData from "../../../hooks/usePublickData";

const AllStories = () => {
    const [publicData] = usePublicData('/stories')
    return (
        <div>
    <SectionTitle heading={'All Stories'}/>
    <div className="lg:flex gap-3 flex-wrap">

      {publicData?.map((story, index) => (
        <div key={index} className='w-[23%]'>
        <Link key={story.id} to={`/stories/${story?._id}`}>
          <div className=" border-2 p-2 text-justify">
            <h3 className='text-xl my-2 font-bold'>{story.title}</h3>
            <p>{story.story?.slice(0, 100)}</p>
          </div>
        </Link>
        </div>))}
    </div>
  </div>
    );
};

export default AllStories;