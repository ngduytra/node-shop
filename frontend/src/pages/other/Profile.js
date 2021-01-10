import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import {Table,Form, Button, Row, Col} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import {getUserDetail, updateUserProfile} from '../../redux/actions/userActions'
// import {listMyOrders} from '../actions/orderActions'

const ProfileScreen = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const userDetail = useSelector(state=> state.userDetail)
    const {loading, error, user} = userDetail

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    // const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    // const {success} = userUpdateProfile

    const orderListMy = useSelector(state=> state.orderListMy)
    const {loading: loadingOrders, error: errorOrders, orders} = orderListMy

    // const cart = useSelector(state=> state.cart)

    useEffect(()=>{
        if(!userInfo){
            history.push(`/login`)
        } else{
            if(!user.name){
                dispatch(getUserDetail('profile'))
                // dispatch(listMyOrders())
            } else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[userInfo])

    const submitHandler = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password do not match')
        } else{
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
        
    }
    return (
        <Row>
            <Col md={3}>
                <h1>User Profile</h1>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {/* {success && <Message variant='success'>Profile Updated</Message>} */}
                    {/* {loading&& <Loader/>} */}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Nguyen Van A'
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>password</Form.Label>
                        <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirmpassword'>
                        <Form.Label>password</Form.Label>
                        <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={e=>setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Update</Button>
                </Form>
            </Col>
            <Col md={9}>
            <h2>My Order</h2>
        {loadingOrders ? <Loader/> : errorOrders ? <Message variant='danger'>{errorOrders}</Message>:(
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERD</th>
                <th></th>
            </thead>
            <tbody>
                {orders.map(order=>(
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.isPaid ? (
                            order.paidAt.substring(0,10)
                        ): (
                            <i className='fas fa-times' style={{color:"red"}}></i>
                        )}</td>
                        <td>{order.isDelevered ? (
                            order.deliveredAt.substring(0,10)
                        ): (
                            <i className='fas fa-times' style={{color:"red"}}></i>
                        )}</td>
                        <td>
                            <LinkContainer to={`/order/${order._id}`}>
                            <Button variant='light'>Details</Button>
                            </LinkContainer>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )}
            </Col>
        </Row>
    )
}

export default ProfileScreen