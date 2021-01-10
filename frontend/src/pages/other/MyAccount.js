import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {updateUserProfile} from '../../redux/actions/userActions'

const MyAccount = ({ location, history }) => {
  const { pathname } = location;
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userDetail = useSelector(state=> state.userDetail)
    const {loading, error, user} = userDetail

  //   const userLogin = useSelector(state=>state.userLogin)
  //   const {userInfo} = userLogin

    const updateProfileUser = useSelector(state=>state.updateProfileUser)
    const {success} = updateProfileUser

  //   const orderListMy = useSelector(state=> state.orderListMy)
  //   const {loading: loadingOrders, error: errorOrders, orders} = orderListMy

    // const cart = useSelector(state=> state.cart)

    // useEffect(()=>{
    //     if(!userInfo){
    //         history.push(`/login`)
    //     } else{
    //         if(!user.name){
    //             // dispatch(getUserDetail('profile'))
    //             // dispatch(listMyOrders())
    //         } else{
    //             setName(user.name)
    //             setEmail(user.email)
    //         }
    //     }
    // },[dispatch, history, userInfo, user])

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(updateUserProfile({id: user._id, name, email}))
        
    }

  return (
    <Fragment>
      <MetaTags>
        <title>Haravy.com | Demo Nodejs Shop ban hang</title>
        <meta
          name="description"
          content="Haravy.com | Demo Nodejs Shop ban hang"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Tài khoản của tôi
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
              {/* {message && <Message variant='danger'>{message}</Message>} */}
              {/* {error && <Message variant='danger'>{error}</Message>} */}
              {success && <Message variant='success'>Thông tin cá nhân đã được cập nhật!</Message>}
              {loading&& <Loader/>}
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Sửa thông tin của bạn{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <form onSubmit={submitHandler}>
                            <div className="myaccount-info-wrapper">
                              <div className="account-info-wrapper">
                                <h4>Thông Tin Cá Nhân Của Tôi</h4>
                                <h5>Chi Tiết</h5>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Tên</label>
                                    <input 
                                      type='text'
                                      placeholder='Nguyen Van A'
                                      value={name}
                                      onChange={e=>setName(e.target.value)}/>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Email Address</label>
                                    <input type="email" placeholder='Nhập email'
                                      value={email}
                                      onChange={e=>setEmail(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Điện Thoại</label>
                                    <input type="text" />
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Continue</button>
                                </div>
                              </div>
                              </div>
                            </form>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2 .</span> Change your password
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Thay Đổi Mật Khẩu</h4>
                              <h5>Mật Khẩu Của Bạn</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password</label>
                                  <input type="password" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Xác Nhận Mật Khẩu</label>
                                  <input type="password" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Tiếp Tục</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>3 .</span> Thay đổi địa chỉ đặt hàng của bạn{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Danh sách địa chỉ</h4>
                            </div>
                            <div className="entries-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <p>Farhana hayder (shuvo) </p>
                                    <p>hastech </p>
                                    <p> Road#1 , Block#c </p>
                                    <p> Rampura. </p>
                                    <p>Dhaka </p>
                                    <p>Bangladesh </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    <button className="edit">Chỉnh Sửa</button>
                                    <button>Xoá</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Tiếp tục</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object
};

export default MyAccount;
