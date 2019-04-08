import React from 'react';

const LittleCard = (props) => (


    <div className="card text-white bg-dark " style={{ width: '10rem', margin: '1rem 1rem 1rem 1rem' }}>
        <div className="card-header">{props.title}</div>
        <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">{props.text}</p>
            <button type="submit" className="btn btn-primary" onClick={props.action}>Button</button>
        </div>
    </div>

);

export default LittleCard;