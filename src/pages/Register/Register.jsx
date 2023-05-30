import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import banner from "../../assets/others/authentication.png"
import heroImg from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { UserAuth } from '../../Auth/Auth';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const location = useLocation();
    const [error, setError] = useState("")
    const [disabled, setDisabled] = useState(true);
    const { signUp, updateUser, googleLog, facebookLog, githubLog } = useContext(UserAuth);
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const captchaRef = useRef();

    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
const photo = form.photo.value;

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            return setError("Password must be minimum eight characters, at least one letter, one number and one special character")
        }

        signUp(email, password)
            .then(res => {
                const loggedUser = res.user;
                updateUser(loggedUser, name, photo)
                    .then(() => {
                        const newUser ={
                            name,
                            email: loggedUser.email,
                            photo
                        }
                        fetch("http://localhost:5000/users",{
                            method:"POST",
                            headers:{
                                "content-type" : "application/json"
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            if(data.insertedId){
                                navigate(from, { replace: true })
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Registration Successful',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })
                            }
                        })
                    })
                    .catch(error => {
                        const message = error.message;
                        Swal.fire({
                            title: 'Error!',
                            text: message,
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        })
                    })
                form.reset();
                setError("")
            })
            .catch(error => {
                const message = error.message;
                Swal.fire({
                    title: 'Error!',
                    text: message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <section style={{ backgroundImage: `url("${banner}")` }} className='w-full min-h-[100vh] flex items-center justify-center'>
                <div className='flex flex-col lg:flex-row gap-10 justify-center items-center shadow-xl p-10'>
                    <div>
                        <img src={heroImg} alt="Hero Img" />
                    </div>
                    <div>
                        <h1 className='brandTitle font-bold text-3xl text-center'>Sign Up</h1>
                        <form className='grid mt-10' onSubmit={handleSignIn}>

                            <label>Name</label>
                            <input type="text" name="name" placeholder='Type You Name' className='inputField' />

                            <label>Email</label>
                            <input type="email" name="email" placeholder='Type Here' className='inputField' />
                            <label>Password</label>
                            <input type="password" name="password" placeholder='Enter your password' className='inputField' />
                            <label>Photo</label>
                            <input type="url" name="photo" placeholder='Enter URL' className='inputField' />

                            <p className='my-2 text-red-600 font-medium w-full  lg:w-96'>{error}</p>

                            <div>
                                <LoadCanvasTemplate />
                                <input type="text" ref={captchaRef} name="captcha" placeholder='Type Captcha above' className='inputField' />
                            </div>
                            <span className='border-[#D1A054] text-[#D1A054] rounded-md w-14 border-2 text-center cursor-pointer' onClick={handleValidate}>Verify</span>


                            <input disabled={disabled} type="submit" value="Sign Up" className='myBtn' />
                        </form>
                        <p className='my-3 text-center text-[#D1A054]'>Already registered? <Link to="/login" className='font-semibold'> Go to log in</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;