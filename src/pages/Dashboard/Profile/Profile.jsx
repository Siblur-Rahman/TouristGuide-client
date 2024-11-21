import { FaEnvelope } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Profile = ({userinfo}) => {
    const {user} = useAuth()
    return (
        <div className="">
            <img src={user?.photoURL} alt="" className='w-[300px] h-[300px] rounded-full mx-auto my-4' />
            <div className="text-3xl text-center">Welcome <span className="text-[#00BBA6] font-bold">{userinfo?.role}</span></div>
            <div className="lg:w-3/5 mx-auto my-6 flex text-2xl">
               <span>Name: </span> <span className="ml-2">{userinfo?.email}</span>    
            </div>       
            <div className="lg:w-3/5 mx-auto my-6 flex text-2xl">
                <FaEnvelope className=""/><span className="ml-2 -mt-1.5">{userinfo?.email}</span>    
            </div>       
        </div>
    );
};

export default Profile;