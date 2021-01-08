import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {login} from '../../redux/actions/userActions'

const LoginRegister = ({ location, history }) => {
  const { pathname } = location;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const userLogin = useSelector(state=> state.userLogin)
  const {loading, error, userInfo} = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(()=>{
    if(userInfo){
      history.push(redirect)
    }
  },[history, userInfo, redirect])
  
  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Haravy.com | Đăng nhập</title>
        <meta
          name="description"
          content="Haravy"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Đăng Nhập Đăng Ký
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Đăng Nhập</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Đăng Ký</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading&& <Loader/>}
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={submitHandler}>
                              <input
                                type="email"
                                name="email"
                                placeholder="Địa chỉ email"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Nhớ tôi</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Quên Mật Khẩu?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Đăng Nhập</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

export default LoginRegister;
