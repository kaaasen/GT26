import React from 'react'
import { Link } from 'react-router-dom';

const RestaurantMapCard = (props) => {
  return (
    <div>
      <h2 className="card-title">
        {props.name}</h2>
        <h3><b>Average rating: </b>{parseFloat(props.avgrating).toFixed(1)}</h3>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="map"
              width="500"
              height="250"
              id="gmap_canvas"
              src={"https://maps.google.com/maps?q=" + props.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0">
            </iframe>
          </div>
        </div>
        <br/><br/>
      </div>
    )
};

export default RestaurantMapCard;
