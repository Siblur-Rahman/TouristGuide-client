// import { stories } from "../../../routes/Routes";
import usePublicData from "../../../hooks/usePublickData";
import Banner from "../Banner/Banner";
import StoriesSection from "../StorySection/StoriesSection";
import TourType from "../TourType/TourType";
import TourismGuideTabs from './../GuideSection/TourismGuideTabs';

const Home = () => {
    const [publicData]= usePublicData('/stories4')
    return (
        <div>
            <Banner/>
            <TourismGuideTabs/>
            <TourType/>
            <StoriesSection stories={publicData}/>
        </div>
    );
};

export default Home;