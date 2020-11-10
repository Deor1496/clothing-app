import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    // tl;dr se ujsa el with router para poder utilizar history y match lo que hace que nuestro item sea un link
    <div className={`${size} menu-item` } onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div  
        style={{
        backgroundImage:`url(${imageUrl})`
         }} 
        className="background-image"></div>

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)   

export default withRouter(MenuItem)