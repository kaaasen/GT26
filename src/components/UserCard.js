import React from 'react';

const userCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                  <p></p>
                  <li>{props.username}</li>
                  <li>{props.password}</li>
                  <li>{props.email}</li>
                  <li>{props.role}</li>
                  <li>Created: {props.created_at}</li>
                  <li>Last updated: {props.updated_at}</li>
                  <p>===============================</p>
                </div>
            </div>
        </div>
    )
};

export default userCard;
