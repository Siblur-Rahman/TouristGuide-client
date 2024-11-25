import {useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [disabled, setDisabled] = useState(true)
    const {signIn} = useAuth();

    const from = location.state?.from?.pathname || "/";
    useEffect(() =>{
        loadCaptchaEnginge(6); 
    }, [])
    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            // alert('Captcha Matched');
            setDisabled(false)
        }
   
        else {
            alert('Captcha Does Not Match');
            setDisabled(true)

        }
    }
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const emeil = form.email.value;
        const password = form.password.value;
        signIn(emeil, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            Swal.fire({
            title: "User Login Successful",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `
            }
        });
        navigate(from, { replace: true });
        })
        .catch(error => console.log(error));
    }
    return (
    <>
        <Helmet>
            <title>Tourist-Guide | Login</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the Captcha above" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <input disabled={disabled} type="submit" className="mybtn" value={"Login"}/>
                    </div>
                </form>
                <p className='px-6'>Are You Here New?</p>
                    <SocialLogin/>
                <button className='p-4
                '><Link to="/signup">Sign UP</Link></button>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;