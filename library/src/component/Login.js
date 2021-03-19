import '../css/login.css'
import React, { useState } from 'react'
import logo from '../images/logo.png'
import { users } from '../artificial_user/users'
import { useHistory } from "react-router-dom";
import store, { LOGIN } from '../redux/reducer'
import { useCookies } from 'react-cookie';
const Login = (props) => {
    const history = useHistory()
    const [values, setValues] = useState({
        username: "",
        password: "",
        usernameErrorMessage: "",
        passwordErrorMessage: "",
        errorMessage: "",
        usernameError: false,
        passwordError: false
    });
    const [cookies, setCookie] = useCookies(['username', 'userImage']);
    // const dispatch = useDispatch()

    const handleChange = (e) => {
        const changeNewValues = { ...values }
        if (e.target.type === 'text') {
            changeNewValues.username = e.target.value
        } else if (e.target.type === 'password') {
            changeNewValues.password = e.target.value
        }
        setValues(changeNewValues)
    }

    const handleSubmit = (e) => {
        const submitNewValues = { ...values }
        for (const user of users) {
            if (values.username === user.username && values.password === user.password) {
                submitNewValues.errorMessage = ' '
                setCookie('username', user.username, { path: '/' })
                setCookie('userImage', user.image, { path: '/' })
                store.dispatch({
                    type: LOGIN,
                    payload: { username: user.username, image: user.image }
                })
                history.push('/')
                break
            } else if (values.username === user.username && values.password !== user.password) {
                submitNewValues.errorMessage = 'password is not valid'
                break

            } else if (values.username !== user.username) {
                submitNewValues.errorMessage = 'username is not valid'
            }
        }
        setValues(submitNewValues)
    }

    return (
        <>
            <div className='login-main'>
                <div className='login-container'>
                    <div className='login-logo'>
                        <div className='logo'>
                            <a href='/' ><img src={logo} /><p>Sky Games</p></a>
                        </div>
                    </div>
                    <div className='login-form'>
                        <div className='form'>
                            <form onSubmit={handleSubmit}>
                                <input type='text' value={values.username} onChange={handleChange} required />
                                <input type='password' value={values.password} onChange={handleChange} required />
                                <a className='error-meassage'>{(values.errorMessage ? values.errorMessage : '')}</a>
                                <input className='submit' type='submit' value='LOG IN' />
                            </form>
                        </div>
                    </div>
                    <div className='in-login-create-newAcc-btn'>
                        <div className='create-newAcc-btn'>
                            <a>Register A Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
