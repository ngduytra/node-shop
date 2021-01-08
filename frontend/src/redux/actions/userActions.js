import axios from 'axios'
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

export const login = (email, password)=>async(dispatch)=>{
    try{
        dispatch({type: USER_LOGIN_REQUEST})
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('/api/users/login', {email, password}, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = ()=> (dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
    // dispatch({type:USER_DETAIL_RESET})
    // dispatch({type:ORDER_LIST_MY_RESET})
    // dispatch({type:USER_LIST_RESET})
}