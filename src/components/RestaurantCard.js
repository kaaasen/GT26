import React from 'react';

const RestaurantCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                  <p></p>
                  <b>{props.name}</b><br/>
                  Add.: {props.address}<br/>
                  Cat.: {props.category}<br/>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;
