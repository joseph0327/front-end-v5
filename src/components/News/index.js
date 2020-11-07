import React, {useState, useEffect}  from 'react'

import NewsIcon from '../../images/korea1.jpg'
import DisplayData from '../HomePost/DisplayData'

const News = () => {
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(6)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, [])

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 6)
    }



    return (
        <div className="container-news">
            <h1>NEWS</h1>
            <div className="wrapper-news">
               {items.slice(0, visible).map(item =>(
                   <div key={item.id} className="card">
                      <a href='/home'> 
                      <div className='news-icon'><img alt="" src={NewsIcon} /></div>
                            <p className="news-tile" >{item.title}</p>
                            <span>{item.body}</span>
                        </a>
                    </div>
               ))}
             
            </div>
            <div className="wrapper-btn-news"> 
                <button onClick={showMoreItems}>LOAD MORE...</button>
            </div>
        </div>
    )
}

export default News

