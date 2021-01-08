import React, { Fragment, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {fetchAllBlogs} from '../../redux/actions/blogActions'

const BlogPosts = () => {
  const dispatch = useDispatch()
  
  const allBlogDatas = useSelector(state=>state.allBlogDatas)
  const {loading, error, blogInfo} = allBlogDatas

  useEffect(()=>{
    dispatch(fetchAllBlogs())
  }, [dispatch])

  return (
    loading ? (<h1>Loading ...</h1>)
      : error ? <h2>{error}</h2>
      : (
        <Fragment>
        {blogInfo.map((blog, index)=>(
          <div key={index} className="col-lg-6 col-md-6 col-sm-12">
            <div className="blog-wrap-2 mb-30">
              <div className="blog-img-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blog/blog-9.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="blog-content-2">
                <div className="blog-meta-2">
                  <ul>
                    <li>22 April, 2020</li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                        4 <i className="fa fa-comments-o" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    Lorem ipsum blog post
                  </Link>
                </h4>
                <p>
                  Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
                  cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                </p>
                <div className="blog-share-comment">
                  <div className="blog-btn-2">
                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                      read more
                    </Link>
                  </div>
                  <div className="blog-share">
                    <span>share :</span>
                    <div className="share-social">
                      <ul>
                        <li>
                          <a className="facebook" href="//facebook.com">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="//twitter.com">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="instagram" href="//instagram.com">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        }
      </Fragment>
    )
  )
}
export default BlogPosts;
