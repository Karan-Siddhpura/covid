import React from 'react';
import "../components/Card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card__title">
                <h1>{props.name}</h1>
            </div>
            <div className="card__info">
                <div className="info__left">
                    <p>Active: {props.active}</p>
                    <p>Recovered: {props.recovered}</p>
                </div>
                <div className="info__right">
                    <p>Deaths: {props.deaths}</p>
                    <p>Confirmed: {props.confirmed}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
