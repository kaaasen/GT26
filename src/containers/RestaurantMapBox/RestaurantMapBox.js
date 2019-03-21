import React from "react";
import dataFile from '../../data.json' /* From craigs code */
import RestaurantMapCard from '../../components/RestaurantMapCard'

class RestaurantMapBox extends React.Component {

  state = {
    restaurants: dataFile.restaurants
  };

  render() {
    const restaurants = this.state.restaurants;

    return (
      <div><font color="white">
      <RestaurantList restaurants={restaurants} />
      </font></div>
    );
  }
}

/* From craigs code */
function RestaurantList(props) {
const restaurants = props.restaurants;
  const listRestaurants = restaurants.map((res) =>
        <RestaurantMapCard
          key = {res.id}
          id = {res.id}
          name = {res.name}
          address = {res.address}
      />
        );

  return (
    <div className="row">
    {listRestaurants}
  </div>
    );
}

export default RestaurantMapBox;
