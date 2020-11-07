import React from 'react'
import Logo from '../../images/logo.jpg'

const Register = ({displayRegister, showRegister, showLogin}) => {
    return (
        <div className={displayRegister ? 'container-register active' : 'container-register'}>
                <div className="logo-login">
                    <img alt="" src={Logo} />
                </div>
                <div>
                    <button className="close-register" onClick={showRegister }>CLOSE</button>
                </div>
                
           <div className ="wrapper-register">
                <div>
                    <h1>REGISTER</h1>
                </div>
                <form>
                    <div className="txt_field">
                        <label>Email</label> 
                        <input type="email"  />    
                    </div> 
                    <div className="txt_field">    
                        <label>Password</label> 
                        <input  type="text"  />
                    </div>
                    <div className="txt_field">    
                        <label>Cofirm Password</label> 
                        <input  type="text"  />
                    </div>
                    <div>  
                        <input type="submit" value="REGISTER"/>
                        
                    </div>
                </form>
                <div className="reg">You already have account? <button onClick={showRegister}>LOGIN HERE</button></div>
            </div>        
        </div>
    )
}

export default Register
