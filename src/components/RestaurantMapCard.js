import React from 'react';

const RestaurantMapCard = (props) => {
  return (
    <div class="gridlayout">
      <h4 className="card-title">{props.name}</h4>
      <iframe
      title="map"
      width="600"
      height="300"
      id="gmap_canvas"
      src={"https://maps.google.com/maps?q=" + props.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}
      frameBorder="3"
      scrolling="no"
      marginHeight="0"
      marginWidth="0">
      </iframe>
    </div>
  )
};

export default RestaurantMapCard;
