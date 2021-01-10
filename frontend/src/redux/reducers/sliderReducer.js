import {
    GET_SLIDER_HERO_ONE_REQUEST,
    GET_SLIDER_HERO_ONE_SUCCESS,
    GET_SLIDER_HERO_ONE_FAIL,
    GET_BANNER_ONE_REQUEST,
    GET_BANNER_ONE_SUCCESS,
    GET_BANNER_ONE_FAIL    
} from '../constants/sliderConstants'

export const getSliderHeroOneReducer = ( state={loading: true,sliderInfo:[], error:''}, action)=>{
    switch(action.type){
        case GET_SLIDER_HERO_ONE_REQUEST:
            return {loading: true}
        case GET_SLIDER_HERO_ONE_SUCCESS:
            return {loading: false, sliderInfo: action.payload}
        case GET_SLIDER_HERO_ONE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
        }
}

export const getBannerOneReducer = ( state={loading: true,bannerOneInfo:[], error:''}, action)=>{
    switch(action.type){
        case GET_BANNER_ONE_REQUEST:
            return {loading: true}
        case GET_BANNER_ONE_SUCCESS:
            return {loading: false, bannerOneInfo: action.payload}
        case GET_BANNER_ONE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
        }
}