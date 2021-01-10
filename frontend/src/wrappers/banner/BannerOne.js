import PropTypes from "prop-types";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";
import {getBannerOnes} from "../../redux/actions/sliderActions.js"

const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  const dispatch = useDispatch()
  const getBannerOne = useSelector(state=>state.getBannerOne)
  const {loading, error, bannerOneInfo} = getBannerOne
  console.log(bannerOneInfo);

  useEffect(() => {
    dispatch(getBannerOnes())
  }, [dispatch])

  return (
  loading ? (<h1>Loading</h1>)
  : error ?
  <h2>{error}</h2>
  :(
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerOneInfo &&
            bannerOneInfo.map((single, key) => {
              return (
                <BannerOneSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-30"
                />
              );
            })}
        </div>
      </div>
    </div>
  ))
}

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;
