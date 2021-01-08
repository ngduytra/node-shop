import axios from 'axios'
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'


export const fetchProducts = ()=>async(dispatch)=>{
  try{
      dispatch({type: FETCH_PRODUCTS_REQUEST})
      const config = {
          headers: {
              'Content-Type':'application/json'
          }
      }
      const {data} = await axios.get('/api/products',config)
      dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: data
      })
  } catch(error){
      dispatch({
          type: FETCH_PRODUCTS_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
  }
}
