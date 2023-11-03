import React from 'react'
import { API_ENDPOINTS } from '../../utils/api-endpoints';
import { http3 } from '../../utils/http3';
import { useMutation } from '@tanstack/react-query';

const RegisterUser = async (input) => {
    console.log(input, "ini input")
    const { data } = await http3.post(API_ENDPOINTS.REGISTER_USER, input);
    console.log(data,"ini responnya");
   
}

const useCreateUser = () =>{
    return useMutation(RegisterUser);
}

export {RegisterUser, useCreateUser}