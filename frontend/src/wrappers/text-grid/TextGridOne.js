import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from "react";
import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";
import {getTextGrid} from "../../redux/actions/textActions.js"

const TextGridOne = ({ spaceBottomClass }) => {
  const dispatch = useDispatch()

  const getText = useSelector(state=>state.getText)
  const {loading, error, textInfo} = getText

  useEffect(()=>{
    dispatch(getTextGrid())
  },[dispatch])
  return (
    loading ?(<h1>Loading</h1>)
    : error ? (<h2>{error}</h2>)
    : (
      <div
        className={`about-mission-area ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <div className="container">
          <div className="row">
            {textInfo &&
              textInfo.map((single, key) => {
                return (
                  <TextGridOneSingle
                    data={single}
                    spaceBottomClass="mb-30"
                    key={key}
                  />
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default TextGridOne;
