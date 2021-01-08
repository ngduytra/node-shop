import axios from 'axios'
export const FETCH_BLOG_FEATURES_SUCCESS = "FETCH_BLOG_FEATURES_SUCCESS";
export const FETCH_BLOG_FEATURES_REQUEST = 'FETCH_BLOG_FEATURES_REQUEST'
export const FETCH_BLOG_FEATURES_FAIL = 'FETCH_BLOG_FEATURES_FAIL'

export const FETCH_ALL_BLOGS_SUCCESS = "FETCH_ALL_BLOGS_SUCCESS";
export const FETCH_ALL_BLOGS_REQUEST = 'FETCH_ALL_BLOGS_REQUEST'
export const FETCH_ALL_BLOGS_FAIL = 'FETCH_ALL_BLOGS_FAIL'

export const fetchBlogs = ()=>async(dispatch)=>{
  try{
      dispatch({type: FETCH_BLOG_FEATURES_REQUEST})
      const config = {
          headers: {
              'Content-Type':'application/json'
          }
      }
      const {data} = await axios.get('/api/blogs/getblogfeatures',config)
      dispatch({
          type: FETCH_BLOG_FEATURES_SUCCESS,
          payload: data
      })
  } catch(error){
      dispatch({
          type: FETCH_BLOG_FEATURES_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
  }
}

export const fetchAllBlogs = ()=>async(dispatch)=>{
    try{
        dispatch({type: FETCH_ALL_BLOGS_REQUEST})
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.get('/api/blogs/getallblogs',config)
        dispatch({
            type: FETCH_ALL_BLOGS_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: FETCH_ALL_BLOGS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
  }