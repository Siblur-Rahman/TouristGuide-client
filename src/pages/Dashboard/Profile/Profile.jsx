import useAuth from "../../../hooks/useAuth";

const Profile = ({userinfo}) => {
    const {user} = useAuth()
    return (
        <div>
            <img src={user?.photoURL} alt="" className='w-[300px] h-[300px] rounded-full mx-auto my-4' />
            <div className="text-3xl text-center">{userinfo?.role} : <span className="text-green-800">{user?.displayName}</span> Welcome</div>       
        </div>
    );
};

export default Profile;