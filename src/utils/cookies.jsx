import Cookies from "universal-cookie";

const cookies = new Cookies()

export const CookieKeys = {
    AuthToken: "Token",
    User: "user"
}

//set. default
const CookieOptions = {
    path: "/",
    secure: true,
}

//set CRD COOKIES
export const CookieStorage = {
    set: (key, data, options) => {
       return cookies.set(key, data, {...CookieOptions, ...options});
    },
    get: (key, options) => {
         return cookies.get(key, {...CookieOptions, ...options});
    },
    remove: (key, options)=>{
        return cookies.remove(key, {...CookieOptions, ...options})
    }

    
}