import React from 'react'

const RestaurantDisplayCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{props.name}, {props.address}</h2>
                    <h3>Category:</h3>
                    <h4 className="card-title">{props.category}</h4>
                    <h3>Description:</h3>
                    <h4 className="card-title">{props.description}</h4>
                    <div className="mapouter">
                    <div className="gmap_canvas">

                    </div>
                    </div>

                </div>
            </div>
        </div>

    )

};

export default RestaurantDisplayCard;
