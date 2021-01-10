import axios from 'axios'
import { 
    GET_TEXT_REQUEST,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAIL,

} from '../constants/textConstant'

export const getTextGrid = ()=>async(dispatch)=>{
    try{
        dispatch({type: GET_TEXT_REQUEST})
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.get('/api/texts/gettextgrid',config)
        console.log('tra');
        dispatch({
            type: GET_TEXT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: GET_TEXT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}