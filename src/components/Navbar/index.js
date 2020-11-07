
import React from 'react'
import Logo from '../../images/logo.jpg'


const Navbar = ({showLogin}) => {
    
    
    return (
        <div>
            <div className="container-nav">
                <div className="wrapper">
                    <div className="logo">
                    <img alt="" src={Logo} />
                    </div>
                    <div className="login">
                        <button onClick={showLogin} href="">LOGIN</button>
                    </div>
                    <div > 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
