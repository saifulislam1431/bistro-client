import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import banner from "../../assets/others/authentication.png"
import heroImg from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { FaGoogle , FaFacebook , FaGithub } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const location = useLocation();
    const [disabled, setDisabled] = useState(true);

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

    const handleLogin = e => {
        e.preventDefault();
        console.log("Click");
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
                    <form className='grid mt-10' onSubmit={handleLogin}>

                    <label>Name</label>
                        <input type="text" name="name" placeholder='Type You Name' className='inputField' />

                        <label>Email</label>
                        <input type="email" name="email" placeholder='Type Here' className='inputField' />
                        <label>Password</label>
                        <input type="password" name="password" placeholder='Enter your password' className='inputField' />
                        <div>
                            <LoadCanvasTemplate />
                            <input type="text" ref={captchaRef} name="captcha" placeholder='Type Captcha above' className='inputField' />
                        </div>
                        <span className='border-[#D1A054] text-[#D1A054] rounded-md w-14 border-2 text-center cursor-pointer' onClick={handleValidate}>Verify</span>


                        <input disabled={disabled} type="submit" value="Sign Up" className='myBtn' />
                    </form>
                    <p className='my-3 text-center text-[#D1A054]'>Already registered? <Link to="/login" className='font-semibold'> Go to log in</Link></p>
                    <p className='text-center'>Or sign Up with</p>
                    <div className='text-center my-3 space-x-5'>
<button><FaFacebook className='w-10 h-8' /></button>
<button><FaGoogle className='w-10 h-8' /></button>
<button><FaGithub className='w-10 h-8' /></button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Register;