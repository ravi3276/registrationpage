import React from 'react'
import './Otp.css'
import OtpInput from 'react-otp-input';
import {Button} from '@material-ui/core';
import {useHistory } from "react-router-dom";

function Otp() {
    const history = useHistory();
    const login=()=>{
        history.push('/login')
    }

    const welcome=()=>{
        history.push('/welcome')
    }
    return (
        <div>
        <div className="otp">
           <h1 className="title">korea stay</h1>
           
           <div className="otp__container">
           <p>Enter OTP</p>
           <div className="otp__num">

           <OtpInput
        // onChange={}
        numInputs={6}
        separator={<span>-</span>}
         />

         <p className="resendotp">Resend OTP</p>
           </div>
           </div>

           <Button onClick={welcome}>Register</Button>
           
        </div>
        <p className="otp__footer">Already a member?<span className="otp__login"
        onClick={login}
        >Login</span></p>

        </div>
        
    )
}

export default Otp
