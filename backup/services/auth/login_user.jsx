import { API_ENDPOINTS } from '../../utils/api-endpoints';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { useMutation } from '@tanstack/react-query';
import http from '../../utils/http';


const loginUser = async (input) => {
  try {
    const result = await http.post(API_ENDPOINTS.LOGIN_USER, input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    window.location.href = "/dashboard"
    return result;
    
  } catch (err) {
    throw err;
  }
};

const useLoginUser = () => {
  return useMutation(loginUser);
};

export { loginUser, useLoginUser};