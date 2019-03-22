import React from 'react'
import { Link } from 'react-router-dom';

const RestaurantMapCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
        <article>
         <b>Review: </b>{props.reviewText}<br/>
         <b>Rating: </b>{props.rating}<br/>
         <b>Reviewed by user #:</b> {props.user_id}<br/>
         <b>Reviewed:</b> {(props.created_at).substring(0,10)}<br/>
         <b> Updated:</b> {(props.updated_at).substring(0,10)}<br/><br/><br/>
        </article>
      </div>
    )
};

export default RestaurantMapCard;
