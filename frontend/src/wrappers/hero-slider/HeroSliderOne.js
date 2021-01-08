import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Swiper from "react-id-swiper";
// import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle.js";
import {getSliderHeroOnes} from '../../redux/actions/sliderActions'

const HeroSliderOne = () => {
  const dispatch = useDispatch()
  const getSliderHeroOne = useSelector(state=>state.getSliderHeroOne)
  const {loading,sliderInfo, error} = getSliderHeroOne
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  useEffect(()=>{
    dispatch(getSliderHeroOnes())
  },[dispatch])

  return (
    loading ? <h1>Dang load .....</h1>
    :
    error ? <h1>{error}</h1>
    : (
      <div className="slider-area">
        <div className="slider-active nav-style-1">
          <Swiper {...params}>
            {sliderInfo &&
              sliderInfo.map((single, key) => {
                return (
                  <HeroSliderOneSingle
                    sliderClassName="swiper-slide"
                    data={single}
                    key={key}
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    )
  );
};

export default HeroSliderOne;
