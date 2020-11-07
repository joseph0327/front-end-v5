import React from 'react'
import Logo from '../../images/logo.jpg'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <div className="container-footer">
            <div className="wrapper-footer">
                <div className="top-footer">
                    <div> 
                    <img alt="" src={Logo} />
                    <span>웹 개발 전문가로 태어났습니다. <br/> 내 여행은 여기에서 시작하고 나는 최고 중 하나가 될 것입니다. </span>
                    </div>  
                    <div>
                        <button onClick={toggleHome}> ^ <br/> Top </button>
                    </div>
                </div>
                <div className="bot-footer">
                    <span>Copyright © 2019 - 2020 Blog Inc.</span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
