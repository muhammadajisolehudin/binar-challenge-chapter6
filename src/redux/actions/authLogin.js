import http from "../../utils/http";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth/authLoginSlice";
import { reduxLoginUser } from "../../services/auth/login_user";


// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya 
export const LoginUser = (input) => (dispatch) => {

        reduxLoginUser(input).then((result) => {
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
        dispatch(setToken(result.data.data.token));
        dispatch(setIsLoggedIn(true));
        window.location.href = "/dashboard"  
    }).catch((err) => {

        console.log(err, "err")

    });
}




export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken, {});
    window.location.href = "/login"

}
