import { Link, useNavigate } from 'react-router-dom';
import img from '../../../public/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const SignUp = () => {
    const axiosPublic= useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const {register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log('created user', user);

            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                // create user entry in the Database
                const userInfo = {
                    name:data.name,
                    email:data.email,
                    role:'tourist'
                }
                axiosPublic.post('/signup', userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        console.log('To Database')
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Sign UP Successful",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate("/")
                    }
                })
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />

                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" {...register("password", { 
                                    required: true, 
                                    minLength:6, 
                                    maxLength: 20,
                                    pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                     })} name='password' placeholder="password" className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {/* {errors.password && <span className='text-red-600'>This field is required</span>} */}
                                {errors.password?.type === "required" && (<p role="alert" className='text-red-500'>password is required</p>)}
                                {errors.password?.type === "minLength" && (<p role="alert" className='text-red-500'>password must be 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (<p role="alert" className='text-red-500'>password must be 20 characters</p>)}
                                {errors.password?.type === "pattern" && (<p role="alert" className='text-red-500'>password must be one upper case, one lower case, one number and one special character</p>)}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;