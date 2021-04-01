import React from 'react'
import './Register.css';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useHistory } from "react-router-dom";
// import {Link} from 'react-router-dom';

function Register() {
    const history = useHistory();
    const generateOTP=()=>{
        history.push('/otp') 
    }

    const login=()=>{
        history.push('/login') 
    }
    return (
        <div className="register">
            <h1 className="title">korea stay</h1>

            <div className="register__page">
                <form action="submit" className="register__form1">
                <p>NAME</p>
                <input type="text" placeholder="Enter your name"/>
                </form>

                <form action="submit" className="register__form1">
                <p>MOBILE</p>
                <input type="text" placeholder="Enter your mobile number"/>
                </form>

                <p className="register__generate"
                onClick={generateOTP}
                >
                Generate OTP</p>

                <div className="register__form2">
                <p>Or register with</p>
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
                onClick={login}
                >Login</span></p>
        </div>
    )
}

export default Register
