import { stories } from "../../../routes/Routes";
import Banner from "../Banner/Banner";
import AllStoriesPage from "../StorySection/AllStoriesPage";
import TourType from "../TourType/TourType";
import TourismGuideTabs from './../GuideSection/TourismGuideTabs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TourType/>
            <TourismGuideTabs/>
            <AllStoriesPage stories={stories}/>
        </div>
    );
};

export default Home;