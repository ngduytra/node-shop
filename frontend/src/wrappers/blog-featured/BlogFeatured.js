import PropTypes from "prop-types";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../components/section-title/SectionTitle";
import {fetchBlogs} from '../../redux/actions/blogActions'

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {

  const dispatch = useDispatch()

  const blogFeaturedData = useSelector(state=>state.blogFeaturedData)
  const {loading, error, blogInfo} = blogFeaturedData

  useEffect(()=>{
    dispatch(fetchBlogs())
  },[dispatch])
  return (
    loading ? <h1>Loading .....</h1>
    : error ?
    ({error}) :(
      <div
        className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <div className="container">
          <SectionTitle
            titleText="BLOG CỦA CHÚNG TÔI"
            positionClass="text-center"
            spaceClass="mb-55"
          />
          <div className="row">
            {blogInfo.map(singlePost => {
              return (
                <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;
