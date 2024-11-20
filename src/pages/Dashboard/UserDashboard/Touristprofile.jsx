import useUser from "../../../hooks/useUser";
import Profile from "../Profile/Profile";


const Touristprofile = () => {
    const userinfo = useUser();

    return (
        <div>
            <Profile userinfo={userinfo}/>
        </div>
    );
};

export default Touristprofile;