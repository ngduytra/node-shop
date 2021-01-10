import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import {cartReducer, addAddressReducer} from "./cartReducer";
import {getSliderHeroOneReducer,getBannerOneReducer} from "./sliderReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import {getBlogFeatureReducer, getAllBlogReducer} from "./blogReducer";
import {userLoginReducer, userRegisterReducer, userUpdateProfileReducer,userDetailReducer} from "./userReducer";
import {getTextReducer} from "./textReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import { orderCreateReducer, orderDetailReducer, orderPayReducer, orderListMyReducer } from './orderReducer'

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  addressOrder: addAddressReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  getSliderHeroOne: getSliderHeroOneReducer,
  blogFeaturedData:getBlogFeatureReducer,
  allBlogDatas:getAllBlogReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  updateProfileUser: userUpdateProfileReducer,
  userDetail: userDetailReducer,
  getBannerOne:getBannerOneReducer,
  getText: getTextReducer,
  orderCreate: orderCreateReducer,
  orderDetail: orderDetailReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer

});

export default rootReducer;
