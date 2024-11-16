// StoryDetailPage.js
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useParams, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const StoryDetailPage = ({ stories }) => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === id);
  const {user} = useAuth();
  console.log(user)

  if (!story) return <p>Story not found</p>;

  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.content}</p>
      {user && (
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon size={32} round />
          Share on Facebook
        </FacebookShareButton>
      )}
      <button>
        <Link to="/all-stories">All Stories</Link>
      </button>
    </div>
  );
};

export default StoryDetailPage;
