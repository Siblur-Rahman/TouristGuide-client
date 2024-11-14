// StoriesPage.js
import { Link } from 'react-router-dom';

const StoriesPage = ({ stories }) => {
  return (
    <div>
      <h2>Tourist Stories</h2>
      <div className="stories-list">
        {stories.slice(0, 4).map((story) => (
          <Link key={story.id} to={`/stories/${story.id}`}>
            <div className="story-preview">
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <button>
        <Link to="/all-stories">All Stories</Link>
      </button>
    </div>
  );
};

export default StoriesPage;
