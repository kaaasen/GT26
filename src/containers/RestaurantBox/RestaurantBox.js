import React from 'react';
import RestaurantCard from '../../components/RestaurantCard';

class RestaurantBox extends React.Component {

    state = {
        allRestaurants: []
    };

    componentDidMount() {
        fetch('https://task26.herokuapp.com/restaurant').then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    allRestaurants: data
                })
            }).catch(err => {
        });
    }

    render() {

        const cards = this.state.allRestaurants.map(restaurant => (
            <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                category={restaurant.category}
                user_id={restaurant.user_id}
                created_at={restaurant.created_at}
                updated_at={restaurant.updated_at}
            />
        ));

        return (
            <React.Fragment>
                <div>
                    {cards}
                </div>
            </React.Fragment>
        )
    }
}

export default RestaurantBox;
