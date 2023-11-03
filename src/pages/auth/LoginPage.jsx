import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import image from '../../asset/img/login_image.png'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {LoginUser} from "../../redux/actions/authLogin";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const dispatch = useDispatch();  

    const Data = useSelector((state)=>state.auth) 
    console.log(Data);

    const toggle = () => {
        setOpen(!open)
    }

    //const { mutate: login, isSuccess, data, error } = useLoginUser();

    const handleInput = (e) => {
        if (e) {
            if (e.target.id === 'email') {
                setEmail(e.target.value);
            }
            if (e.target.id === 'password') {
                setPassword(e.target.value);
            }
        }
    };

    // useEffect(() => {
    //     if (isSuccess && data) {
    //     navigate("/dashboard");
    //     } else if (error) {
    //     console.log(error.response.data.message);
    //     }
    // }, [isSuccess, error]);

    const LoginHandle = () => {
        dispatch(LoginUser(
        {
            "email": email,
            "password" : password,
        }));
    };

    return (
        <div className='hero flex items-center justify-center min-h-screen '>
            <div className='flex items-center justify-center min-h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] w-full h-full'>
                <div className='relative h-[500px] flex flex-col m-6 space-y-8 bg-white bg-opacity-90 shadow-2xl rounded-xl md:flex-row md:space-y-0 '>
                    <div className='flex flex-col justify-center p-8 md:p-14'>
                        <span className='mb-3 text-4xl font-bold text-red-600'>Login</span>
                        <div className='py-1'>
                            <span className='mb-2 text-sm'>Email Address</span>
                            <div className='items-center flex justify-end'>
                                <input onChange={handleInput} id='email' className='w-[250px] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="email"></input>
                                <span className='absolute mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                </span>
                            </div>
                        </div>
                        <div className='py-1'>
                            <span className='mb-2 text-sm'>Password</span>
                            <div className='items-center flex justify-end'>
                                <input onChange={handleInput} id='password' className='w-[250px] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type={(open === false) ? 'password' : 'text'}></input>
                                <span className='absolute mr-3 text-gray-500'>{(open === false ) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>}</span>
                            </div>
                        </div>
                        <button onClick={() => {LoginHandle()}} className='w-[250px] bg-gradient-to-r from-red-600 from-50% to-[#8B0000] via-50% text-white p-2 rounded-md mt-6 hover:bg-white active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out'>Login</button>
                        <div>
                            <h3 className='justify-center flex mt-2'>or</h3>
                        </div>
                        <div className='justify-center flex mt-3'>
                            <GoogleLogin
                                width="250px"
                                shape='rectangular'
                                onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                }}
                                onError={() => {
                                console.log('Login Failed');
                                }}
                            />
                        </div>
                        <div className='pt-3 justify-center flex'>
                            <span className='text-sm font-bold'>Don't have an account? <a className='text-red-500' href='/'>Sign Up</a></span>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={image} className='w-[300px] h-full hidden rounded-r-xl md:block object-cover' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
