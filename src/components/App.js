import React from 'react';

const users = [
    {id: 1, name: 'Leanne Graham'},
    {id: 2, name: 'Ervin Howell'},
    {id: 3, name: 'Clementine Bauch'},
    {id: 4, name: 'Patricia Lebsack'}
];


class App extends React.Component {

    getUsersInLiList = () => {
        const userLiItems = users.map((user) =>
            <li key={user.id}>{user.name}</li>
        );
        return userLiItems
    }

    render() {
        return (
            <ul>
                <this.getUsersInLiList/>
            </ul>
        );
    }
}


export default App;