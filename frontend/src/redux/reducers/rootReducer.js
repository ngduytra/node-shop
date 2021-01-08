import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import {getSliderHeroOneReducer} from "./sliderReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import {getBlogFeatureReducer, getAllBlogReducer} from "./blogReducer";
import {userLoginReducer} from "./userReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  getSliderHeroOne: getSliderHeroOneReducer,
  blogFeaturedData:getBlogFeatureReducer,
  allBlogDatas:getAllBlogReducer,
  userLogin: userLoginReducer
});

export default rootReducer;
