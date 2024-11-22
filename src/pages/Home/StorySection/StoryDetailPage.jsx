// StoryDetailPage.js
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useParams, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import usePublickData from '../../../hooks/usePublickData';

const StoryDetailPage = () => {
  const [publicData]= usePublickData('/stories4')
  const { id } = useParams();
  const story = publicData?.find((story) => story?._id === id);
  const {user} = useAuth();
  console.log(user)

  if (!story) return <p>Story not found</p>;

  return (
    <div className='lg:pt-10'>
        <h2 className='text-2xl my-4 font-bold'>{story.title}</h2>
        <p>{story?.story}</p>
        <div className='flex gap-4'>
            {user && (
                    <button className='bg-[#00bba6] my-4 px-4 py-2 rounded-lg'>
                    <FacebookShareButton url={window.location.href} className='flex gap-2'>
                      <FacebookIcon size={32} round />
                      Share on Facebook
                    </FacebookShareButton>

                    </button>
                  )}
            <div>
                  <button className='bg-[#00bba6] my-4 px-4 py-4 rounded-lg'>
                    <Link to="/allstories">All Stories</Link>
                  </button>
            </div>
        </div>
    </div>
  );
};

export default StoryDetailPage;
