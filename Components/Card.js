import React from "react"

export default function Card(props){
    //console.log(props)
    return (
        <div className="card">
            <img src={`./images/${props.imageUrl}`} className="card--img" alt=""/>
            <div className="card--details">
                <div className="card--locator">
                    <img src="./images/locator.png" alt=""/>
                    <p className="card--place">{props.location}</p>
                    <a href={props.googleMapsUrl}>Visit on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h5>{`${props.startDate} - ${props.startDate}`}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}