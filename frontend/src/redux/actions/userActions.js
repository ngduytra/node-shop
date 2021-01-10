import axios from 'axios'
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
export const USER_DETAIL_SUCCESS = "USER_DETAIL_SUCCESS";
export const USER_DETAIL_REQUEST = 'USER_DETAIL_REQUEST'
export const USER_DETAIL_FAIL = 'USER_DETAIL_FAIL'
export const USER_DETAIL_RESET = 'USER_DETAIL_RESET'

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

export const register = (name, email, password)=>async(dispatch)=>{
    try{
        dispatch({type: USER_REGISTER_REQUEST})
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('/api/users', {name,email, password}, config)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        // dispatch({
        //     type: USER_LOGIN_SUCCESS,
        //     payload: data
        // })
        // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
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

export const getUserDetail = (id)=>async(dispatch, getState)=>{
    try{
        dispatch({type: USER_DETAIL_REQUEST})
        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/users/${id}`, config)
        dispatch({
            type: USER_DETAIL_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: USER_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUserProfile = (user)=>async(dispatch, getState)=>{
    try{
        dispatch({type: USER_UPDATE_PROFILE_REQUEST})
        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`/api/users/profile`,user, config)
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}