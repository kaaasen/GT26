import React from "react";
//import dataFile from './data.json'
import RestaurantCard from '../../components/RestaurantMapCard'

class RestaurantMapBox extends React.Component {

  state = {
    restaurants: []
    //allRestaurants : []
  };

  componentDidMount() {
      fetch('http://task26.herokuapp.com/restaurant').then(res => res.json())
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
          id = {res.id}
          name = {res.name}
          address = {res.address}
          category={res.category}
          description={res.description}
          user_id={res.user_id}
          created_at={res.created_at}
          updated_at={res.updated_at}
      />
        );

  return (
    <div className="row">
    {listRestaurants}
  </div>
    );
}

export default RestaurantMapBox;
