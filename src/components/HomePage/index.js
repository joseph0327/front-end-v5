
import React from 'react'
import Logo from '../../images/logo.jpg'


const HomePage = () => {
    
    
    return (
        <div>
            <div className="container-nav">
                <div className="wrapper">
                    <div className="logo">
                    <img alt="" src={Logo} />
                    </div>
                    <div className="login">
                        <a href='/'><button>LOG OUT</button></a>
                    </div>
                    <div > 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
