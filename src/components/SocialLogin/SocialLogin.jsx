import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result)
            const userInfo = {
                name:result.user.displayName,
                email:result.user.email
            }
            axiosPublic.post('/signup', userInfo)
            .then(res =>{
                console.log(res.data)
                // if(res.data.insertedId){
                    // console.log('To Database')
                    // reset();
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: "Sign UP Successful",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    //   });
                      navigate("/")
                // }
            })
        })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className="mr-4"/>
                Google
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;