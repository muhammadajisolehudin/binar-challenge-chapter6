import React, { useEffect, useState } from 'react'
import { useCreateUser, RegisterUser } from '../../services/auth/register_user'
import { useNavigate } from 'react-router-dom'
import image from '../../asset/img/register_image.png'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch } from 'react-redux';

export const RegisterPage = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [Name, setName] = useState()
    const [Lastname, setLastname] = useState()
    const [Password, setPassword] = useState()
    const [PasswordConfirmation, setPasswordConfirmation] = useState()
    const [Email, setEmail] = useState() 
   

    const toggle = () => {
      setOpen(!open);
    };

    const{mutate: RUser, isSuccess, error} = useCreateUser()

    const handleInput=(e)=>{
        if(e){
            if(e.target.id === "name"){
                setName(e.target.value)
            }
            if(e.target.id === "lastname"){
                setLastname(e.target.value)
            }
            if(e.target.id === "email"){
                setEmail(e.target.value)
            }
            if(e.target.id === "password"){
                setPassword(e.target.value)
            }
            if(e.target.id === "confirmation_password"){
                setPasswordConfirmation(e.target.value)
            }
        }
        
    }

    if (error){
        console.log (error, "ini error")
    }

    if (isSuccess){
        navigate('/login')
    }

    const registerUser=()=>{
        RUser({
            "name" : Name,
            "lastname" : Lastname,
            "email" : Email,
            "password" : Password,
            "password_confirmation" : PasswordConfirmation
        })
    }

    return (
        <div className='hero flex items-center justify-center min-h-screen '>
            <div className='flex items-center justify-center min-h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] w-full h-full '>
                <div className='relative h-[500px] flex flex-col m-4 space-y-8 bg-white bg-opacity-90 shadow-2xl rounded-xl md:flex-row md:space-y-0 '>
                    <div className='flex flex-col justify-center p-8 md:p-14'>
                    <span className='mb-3 text-4xl font-bold text-red-600'>Create Account</span>
                    <div className='py-1'>
                        <span className='mb-2 text-sm'>First Name</span>
                        <div className='items-center flex justify-end'>
                            <input onChange={handleInput} id='name' className='w-full p-1 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="text" />
                            <span className='absolute mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            </span>
                        </div> 
                     </div>
                    <div className='py-1'>
                        <span className='mb-2 text-sm'>Last Name</span>
                        <div className='items-center flex justify-end'>
                            <input onChange={handleInput} id='lastname' className='w-full p-1 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="text" />
                            <span className='absolute mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            </span>
                        </div> 
                    </div>
                    <div className='py-1'>
                        <span className='mb-2 text-sm'>Email Address</span>
                        <div className='items-center flex justify-end'>
                            <input onChange={handleInput} id='email' className='w-full p-1 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type="email" />
                            <span className='absolute mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-1'>
                        <span className='mb-2 text-sm'>Password</span>
                        <div className='items-center flex justify-end'>
                            <input onChange={handleInput} id='password' className='w-full p-1 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type={(open === false) ? 'password' : 'text'} />
                            <span className='absolute mr-3 text-gray-500'>{(open === false ) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>}</span>
                        </div>
                    </div>
                    <div className='py-1'>
                        <span className='mb-2 text-sm'>Password Confirmation</span>
                        <div className='items-center flex justify-end'>
                            <input onChange={handleInput} id='password_confirmation' className='w-full p-1 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-700' type={(open === false) ? 'password' : 'text'}/>
                            <span className='absolute mr-3 text-gray-500'>{(open === false ) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>}</span>
                        </div>
                    </div>
                    <button onClick={() => {registerUser()}} className='w-full bg-gradient-to-r from-red-600 from-50% to-[#8B0000] via-50% text-white p-1 rounded-md my-2 hover:bg-white active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out'>Register</button>
                    <div className='justify-center flex'>
                        <span className='text-sm font-bold'>Already have an account? <a className='text-red-500' href='/login'>Login</a></span>
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
