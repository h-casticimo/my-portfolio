import React from 'react'

export default function Expcard(props){
    return (
        <div className="container-expcard">
            <div className="image-expcard">
                <img src={props.img} alt={props.alt} className="image-xp"/>
            </div>
            <div className="details-exp">
                <h4>{props.name}</h4>
                <h5>{props.subname}</h5>
            </div>
        </div>
    )
}
