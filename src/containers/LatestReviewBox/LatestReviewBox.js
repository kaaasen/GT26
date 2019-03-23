import React from "react";
import RestaurantCard from '../../components/LatestReviewCard'

class LatestReviewBox extends React.Component {

  state = {
    restaurants: []
  };

  componentDidMount() {
      fetch('http://task26.herokuapp.com/review/latest').then(res => res.json())
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
          review_id = {res.review_id}
          rating = {res.rating}
          reviewText = {res.reviewtext}
          created_at={res.created_at}
          updated_at={res.updated_at}
          user_id={res.user_id}
          restaurant_id={res.restaurant_id}
          name={res.name}
      />
        );

  return (
    <div className="row">
    {listRestaurants}
  </div>
    );
}

export default LatestReviewBox;
