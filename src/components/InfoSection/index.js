import React from 'react'
import Icon1 from '../../images/korea1.jpg'
import Icon2 from '../../images/korea2.jpg'
import Icon3 from '../../images/korea3.jpg'
import Left from '../../images/left.svg'
import Right from '../../images/right.svg'

const InfoSection = () => {
    return (
        <div className="container-info">

            <input type="radio" name="images" id="i1" defaultChecked></input>
            <input type="radio" name="images" id="i2"></input>
            <input type="radio" name="images" id="i3"></input>

            <div className="slide_img1" id="one" >
                <img alt=""  className="image-slide1" src={Icon1} />
                <label htmlFor="i3" className="pre"><img alt="" src={Left}/></label>
                <label htmlFor="i2" className="next"><img alt="" src={Right}/></label>
            </div>
            <div className="slide_img2" id="two" >
                <img alt="" className="image-slide2" src={Icon2} />
                <label htmlFor="i1" className="pre"><img alt="" src={Left}/></label>
                <label htmlFor="i3" className="next"><img alt="" src={Right}/></label>
            </div>
            <div className="slide_img3" id="three">
                <img alt="" className="image-slide3" src={Icon3} />
                <label htmlFor="i2" className="pre"><img alt="" src={Left}/></label>
                <label htmlFor="i1" className="next"><img alt="" src={Right}/></label>
            </div>

            <div className="nav">
                <label className="dots"  id="dot1" htmlFor="i1"></label>
                <label className="dots"  id="dot2" htmlFor="i2"></label>
                <label className="dots"  id="dot3" htmlFor="i3"></label>
            </div>    

        </div>
    )
}

export default InfoSection
