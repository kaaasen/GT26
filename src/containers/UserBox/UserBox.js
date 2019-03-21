import React from 'react';
import UserCard from '../../components/UserCard';

class UserBox extends React.Component {

    state = {
        allUsers: []
    };

    componentDidMount() {
        fetch('https://task26.herokuapp.com/user').then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    allUsers: data
                })
            }).catch(err => {
        });
    }

    render() {

        const cards = this.state.allUsers.map(user => (
            <UserCard
                key={user.id}
                username={user.username}
                password={user.password}
                email={user.email}
                role={user.role}
                created_at={user.created_at}
                updated_at={user.updated_at}
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

export default UserBox;
