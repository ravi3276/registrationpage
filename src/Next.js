import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core'
import './Next.css';
import {useHistory } from "react-router-dom";

function Next() {
    const history = useHistory();

    const register=()=>{
        history.push('/')
    }
    return (
        <div className="next">
        <Avatar 
        className="avatar__logo" 
        alt="" src="" />
        <div className="welcome__container">

            <div className="welcome__box">
            <h1>Welcome</h1>
            <form action="submit" className="register__form1">
                <p>ADDRESS</p>
                <input type="text" placeholder="Line 1"/>
                <input className="line2" type="text" placeholder="Line 2"/>
                </form>

                <form action="submit" className="register__form1">
                <p>PINCODE</p>
                <input type="text" placeholder="Enter your pincode"/>
                </form>

                <form action="submit" className="register__form1">
                <p>CITY</p>
                <input type="text" placeholder="Enter your city"/>
                </form>

                <form action="submit" className="register__form1">
                <p>STATE</p>
                <input type="text" placeholder="Enter your state"/>
                </form>

                <Button onClick={register}>Next</Button>
            </div>
        </div>   
        </div>
    )
}

export default Next
