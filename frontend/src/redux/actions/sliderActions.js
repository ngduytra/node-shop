import axios from 'axios'
import { 
    GET_SLIDER_HERO_ONE_REQUEST,
    GET_SLIDER_HERO_ONE_SUCCESS,
    GET_SLIDER_HERO_ONE_FAIL,
    GET_BANNER_ONE_REQUEST,
    GET_BANNER_ONE_SUCCESS,
    GET_BANNER_ONE_FAIL

} from '../constants/sliderConstants'

export const getSliderHeroOnes = ()=>async(dispatch)=>{
    try{
        dispatch({type: GET_SLIDER_HERO_ONE_REQUEST})
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.get('/api/sliders/gethelloslider1',config)
        console.log('tra');
        dispatch({
            type: GET_SLIDER_HERO_ONE_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: GET_SLIDER_HERO_ONE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getBannerOnes = ()=>async(dispatch)=>{
    try{
        dispatch({type: GET_BANNER_ONE_REQUEST})
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.get('/api/sliders/getbannerone',config)
        console.log(data);
        dispatch({
            type: GET_BANNER_ONE_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: GET_BANNER_ONE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}