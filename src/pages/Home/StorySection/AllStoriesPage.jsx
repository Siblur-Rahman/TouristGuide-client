// AllStoriesPage.js
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';

const AllStoriesPage = ({ stories }) => (
  <div>
    <SectionTitle heading={'All Stories'}/>
    <div className="stories-list lg:flex justify-between">
      {stories.map((story, index) => (
        <div key={index} className='w-1/5'>
        <Link key={story.id} to={`/stories/${story.id}`}>
          <div className="story-preview text-white text-center border-2 h-[100px]">
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
          </div>
        </Link>
        </div>))}
    </div>
  </div>
);

export default AllStoriesPage;
