import React, {useState} from 'react'
import Logo from '../../images/logo.jpg'

const LogIn = ({displaylogin, showLogin, showRegister}) => {
    
        

    return (
        <div className={displaylogin ? 'container-login active' : 'container-login'}>
                <div className="logo-login">
                    <img alt="" src={Logo} />
                </div>
                <div>
                    <button className="close-login" onClick={showLogin}>CLOSE</button>
                </div>
           <div className ="login-wrapper">
                <div>
                    <h1>LOGIN</h1>
                </div>
                <form action='/home'>
                    <div className="txt_field">
                        <label>Email</label> 
                        <input type="email"  />    
                    </div> 
                    <div className="txt_field">    
                        <label>Password</label> 
                        <input  type="text"  />

                    </div>
                    <div>  
                        <input type="submit" value="LOGIN"/>
                    </div>         
                </form>
                <div className="reg">No account yet? <button onClick={showRegister}>REGISTER HERE</button></div>
            </div>        
        </div>
    )
}

export default LogIn
