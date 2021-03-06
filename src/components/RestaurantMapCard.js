import React from 'react'


const RestaurantMapCard = (props) => {
  return (
    <div>
      <h2 className="card-title">
        {props.name}</h2>
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
        <article>
         <b>Category: </b>{props.category}<br/>
         <b>Description: </b>{props.description}<br/><br/><br/>
        </article>
      </div>
    )
};

export default RestaurantMapCard;
