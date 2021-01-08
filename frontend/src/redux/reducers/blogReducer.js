import { FETCH_BLOG_FEATURES_SUCCESS, FETCH_BLOG_FEATURES_REQUEST, FETCH_BLOG_FEATURES_FAIL, FETCH_ALL_BLOGS_REQUEST, FETCH_ALL_BLOGS_SUCCESS, FETCH_ALL_BLOGS_FAIL } from '../actions/blogActions'

export const getBlogFeatureReducer = ( state={loading: true,blogInfo:[], error:''}, action)=>{
    switch(action.type){
        case FETCH_BLOG_FEATURES_REQUEST:
            return {loading: true}
        case FETCH_BLOG_FEATURES_SUCCESS:
            return {loading: false, blogInfo: action.payload}
        case FETCH_BLOG_FEATURES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
        }
}

export const getAllBlogReducer = ( state={loading: true,blogInfo:[], error:''}, action)=>{
    switch(action.type){
        case FETCH_ALL_BLOGS_REQUEST:
            return {loading: true}
        case FETCH_ALL_BLOGS_SUCCESS:
            return {loading: false, blogInfo: action.payload}
        case FETCH_ALL_BLOGS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
        }
}

