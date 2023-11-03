import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const UserIcon = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const dataMe = useSelector((store) => store.me.getMe)
console.log(dataMe, "ini me data")
  return (
    <div>

        <button onClick={handleOpen}  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center focus:outline-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15s2-1 5-1 5 1 5 1"
          />
          <circle cx="12" cy="10" r="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19c-9 0-10-9-10-9"
          />
            </svg>
        </button>
        <Dialog open={open} handler={handleOpen} className=' font-semibold bg-red-500'>
            <DialogHeader className=' text-white flaex text-center justify-center'>User Account</DialogHeader>
            <DialogBody className='text-white text-center'>
                <p className="text-xl font-semibold">{ dataMe.name}</p>
                <p className="text-gray-500">{ dataMe.email }</p>
            </DialogBody>
            
        </Dialog>
        
    </div>
    
     
  );
};

export default UserIcon;
