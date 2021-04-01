import { Button } from '@material-ui/core'
import React from 'react'
import './Welcome.css';
import Avatar from '@material-ui/core/Avatar';
import {useHistory } from "react-router-dom";

function Welcome() {
    const history = useHistory();
    const logout=()=>{
        alert('this page will be logged out')
    }

    const next=()=>{
        history.push('/next')
    }
    return (
        <div className="welcome">
            <Avatar 
            className="avatar__logo" 
            onClick={logout}
            alt="" src="" />
            <div className="welcome__container">

                <div className="welcome__box">
                <h1>Welcome</h1>
                <form action="submit" className="register__form1">
                    <p>USER NAME</p>
                    <input type="text" placeholder="Enter your username"/>
                    </form>
    
                    <form action="submit" className="register__form1">
                    <p>MOBILE</p>
                    <input type="text" placeholder="1234567890"/>
                    </form>
    
                    <form action="submit" className="register__form1">
                    <p>EMAIL</p>
                    <input type="text" placeholder="Enter your mail"/>
                    </form>
    
                    <form action="submit" className="register__form1">
                    <p>PASSWORD</p>
                    <input type="text" placeholder="Enter your password"/>
                    </form>
    
                    <Button onClick={next}>Next</Button>
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        </div>
    )
}

export default Welcome
