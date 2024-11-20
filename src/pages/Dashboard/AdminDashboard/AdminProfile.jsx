import useUser from "../../../hooks/useUser";
import Profile from "../Profile/Profile";


const AdminProfile = () => {
    const userinfo = useUser();
    console.log(userinfo)
    return (
        <div>
            <Profile userinfo={userinfo}/>
        </div>
    );
};

export default AdminProfile;