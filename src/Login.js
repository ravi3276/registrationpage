import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';
import './Login.css';

function Login() {
    const history = useHistory();

    const register=()=>{
            history.push('/')
    }

    return (

        <div className="login">
        <h1 className="title">korea stay</h1>

        <div className="register__page">
            <form action="submit" className="register__form1">
            <p>USER NAME</p>
            <input type="text" placeholder="Enter your name"/>
            </form>

            <form action="submit" className="register__form1">
            <p>PASSWORD</p>
            <input type="text" placeholder="Enter your password"/>
            </form>

            <div className="login__container">
            <Button>Login</Button>
            <p className="login__forget">
            Forget ?
            </p>
            </div>

            <div className="register__form2">
            <p>other login options</p>
            <div className="register__circle">
                <RadioButtonUncheckedIcon />
                <RadioButtonUncheckedIcon />
                <RadioButtonUncheckedIcon />
                <RadioButtonUncheckedIcon />
                <RadioButtonUncheckedIcon />

            </div>
            </div>
        </div>
            <p className="register__footer">
            Not a member yet?<span className="register__login"
            onClick={register}
            >Register</span></p>

            <div class="footer">
            <p>All copyrights reserved 2021</p>
            </div>
        </div>
    )
}

export default Login
