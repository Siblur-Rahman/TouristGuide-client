// AllStoriesPage.js
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';

const StoriesSection = ({ stories }) => (
  <div>
    <SectionTitle heading={'Tour Stories'}/>
    <div className="lg:flex justify-between flex-wrap">

      {stories?.map((story, index) => (
        <div key={index} className='w-[23%]'>
        <Link key={story.id} to={`/stories/${story?._id}`}>
          <div className="text-justify border-2">
            <h3 className='text-xl  my-2 p-2 text-[#00BBA6] text-justify'>{story.title}</h3>
            <p>{story.story?.slice(0, 100)}</p>
          </div>
        </Link>
        </div>))}
    </div>
  </div>
);

export default StoriesSection;
