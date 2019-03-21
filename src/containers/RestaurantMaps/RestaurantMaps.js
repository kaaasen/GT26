import React from "react";
//import dataFile from './data.json'
import RestaurantCard from '../../components/RestaurantCard'

class RestaurantMaps extends React.Component {

  state = {
    restaurants: []
    //allRestaurants : []
  };

  componentDidMount() {
      fetch('https://task26.herokuapp.com/restaurant').then(res => res.json())
      .then(data => {
          console.log(data);
          this.setState({
              restaurants: data
          })
      }).catch(err => { throw err})
  }

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
        <RestaurantCard
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

export default RestaurantMaps;
