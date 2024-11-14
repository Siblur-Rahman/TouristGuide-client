import { stories } from "../../../routes/Routes";
import Banner from "../Banner/Banner";
import AllStoriesPage from "../StorySection/AllStoriesPage";
import TourType from "../TourType/TourType";

const Home = () => {
    return (
        <div>
            <Banner/>
            <TourType/>
            <AllStoriesPage stories={stories}/>
        </div>
    );
};

export default Home;