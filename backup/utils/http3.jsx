import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

// const Token = CookieStorage.get(CookieKeys.AuthToken)
//pondasi axios
const http3 = axios.create({
    baseURL : process.env.REACT_APP_SERVER,
    timeout : 30000,
    headers : {
        accept: 'application/json',
        "Content-Type" : "application/json"
    } 
})

http3.interceptors.request.use(
    (config)=>{
        config.headers={
            ...config.headers,
            Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`
            // Authorization: `Bearer ${ Token ? Token : ""}`
        }

        return config
    },
)

export {http3}