import React, { useContext } from 'react';
import { UserAuth } from '../../../Auth/Auth';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const { googleLog, facebookLog, githubLog } = useContext(UserAuth);
    const handleGoogleIn = () => {
        googleLog()
            .then(res => {
                const loggedUser = res.user;
                const newUser ={
                    name : loggedUser.displayName,
                    email : loggedUser.email,
                    photo : loggedUser.photoURL
                }
                fetch("http://localhost:5000/users",
                {
                    method:"POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                        Swal.fire({
                            title: 'Success!',
                            text: 'Registration Successful',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
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
    }

    const handleGithubIn = () => {
        githubLog()
        .then(res => {
            const loggedUser = res.user;
            const newUser ={
                name : loggedUser.displayName,
                email : loggedUser.email,
                photo : loggedUser.photoURL
            }
            fetch("http://localhost:5000/users",
            {
                method:"POST",
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Success!',
                        text: 'Registration Successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
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
    }
    return (
        <div className='mt-4'>
            <p className='text-center'>Or sign Up with</p>
            <div className='text-center my-3 space-x-5'>
                <button><FaFacebook className='w-10 h-8' /></button>
                <button onClick={handleGoogleIn}><FaGoogle className='w-10 h-8' /></button>
                <button onClick={handleGithubIn}><FaGithub className='w-10 h-8' /></button>
            </div>
        </div>
    );
};

export default SocialLogin;