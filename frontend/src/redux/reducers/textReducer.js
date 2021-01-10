import {
    GET_TEXT_REQUEST,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAIL,
} from '../constants/textConstant'

export const getTextReducer = ( state={loading: true,textInfo:[], error:''}, action)=>{
    switch(action.type){
        case GET_TEXT_REQUEST:
            return {loading: true}
        case GET_TEXT_SUCCESS:
            return {loading: false, textInfo: action.payload}
        case GET_TEXT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
        }
}
