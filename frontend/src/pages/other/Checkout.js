import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect, useDispatch } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {createOrder} from '../../redux/actions/orderActions'
import {saveShippingAddress} from '../../redux/actions/cartActions'

const Checkout = ({ location, addressOrder,userLogin, cartItems, currency , orderCreate, history}) => {
  const { pathname } = location;
  const dispatch = useDispatch()
  let cartTotalPrice = 0;
  const {shippingAdrress} = addressOrder
  const {userInfo} = userLogin
  const {order, success, error} = orderCreate


  const [name, setName] = useState(userInfo ? userInfo.name : '')
  const [address, setAddress] = useState(shippingAdrress.address)
  const [city, setCity] = useState(shippingAdrress.city)
  const [postalCode, setPostalCode] = useState(shippingAdrress.postalCode)
  const [country, setCountry] = useState(shippingAdrress.country)
  const [message, setMessage] = useState('')

  const addDecimals = (num)=>{
    return (Math.round(num * 100)/100).toFixed(2)
  }
  useEffect(() => {
    if(!userInfo) {
      history.push('/login-register?redirect=checkout')
    }
    if(success){
      setMessage('Đã đặt hàng thành công!')
    }
}, [ userInfo,success, order])

  const productPrice = addDecimals(cartItems.reduce(
    (acc, item)=> acc + item.price * item.quantity,0
  ))

  const shippingPrice = addDecimals(productPrice > 100 ? 0 : 100)
  const taxPrice = addDecimals(Number((0.15 * productPrice).toFixed(2)))
  const totalPrice = (Number(productPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2)

//   useEffect(() => {
//     if(success){
//         history.push(`/order/${order._id}`)
//     }
// }, [history, success, order])

  const handlerOrder = ()=>{
    dispatch(createOrder({
      orderItems: cartItems,
      shippingAddress: {
        address: address,
        city: city,
        postalCode:postalCode,
        country:country
      },
      // paymentMethod: cart.paymentMethod,
      itemsPrice: productPrice,
      shippingPrice: shippingPrice,
      taxPrice: taxPrice,
      totalPrice: totalPrice
    }))
    dispatch(saveShippingAddress)
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Haravy.com | Checkout</title>
        <meta
          name="description"
          content="Haravy.com | Checkout"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Thanh Toán
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        {message && <h1>{message}</h1>}
        {error && <h1>{error}</h1>}
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Chi Tiết Hoá Đơn</h3>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="billing-info mb-20">
                          <label>Họ Tên</label>
                          <input 
                          type="text"
                          placeholder='Enter address'
                          value={name}
                          required
                          onChange={e=>setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Tên Công Ty</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Quốc Gia</label>
                          <input 
                          type='text'
                          placeholder='Nhập quốc gia'
                          value={country}
                          required
                          onChange={e=>setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Tên Đường, Số nhà</label>
                          <input
                            className="billing-address"
                            placeholder="Tên đường ..."
                            type="text"
                            value={address}
                            required
                            onChange={e=>setAddress(e.target.value)}
                          />
                          <input
                            placeholder="So nha, duong.. etc."
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Thij Tran / Thanh Pho</label>
                          <input 
                          type="text"
                          placeholder='Nhập quốc gia'
                          value={city}
                          required
                          onChange={e=>setCity(e.target.value)}
                           />
                        </div>
                      </div>
                      {/* <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label> / County</label>
                          <input type="text" />
                        </div>
                      </div> */}
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Postcode / ZIP</label>
                          <input 
                          type="text"
                          placeholder='Ma Buu Dien'
                          value={postalCode}
                          required
                          onChange={e=>setPostalCode(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Số điện thoại</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Địa chỉ email</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>Thông tin thêm</h4>
                      <div className="additional-info">
                        <label>Lưu ý về đơn hàng</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Sản Phẩm</li>
                            <li>Tổng Cộng</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover" onClick={handlerOrder}>Đặt Hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Không có mặt hàng nào được tìm thấy <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
    addressOrder: state.addressOrder,
    userLogin: state.userLogin,
    orderCreate: state.orderCreate
  };
};

export default connect(mapStateToProps)(Checkout);
