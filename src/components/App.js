import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];


class App extends React.Component {
    allUsers = []

    getUsersInLiList = () => {
        users.map((user)=>{
            console.log(user.name)
          this.allUsers.push(<li id={user.id}>{user.name}</li>)

        })

        return this.allUsers
    }

    render() {
        return (
            <ul>
                <this.getUsersInLiList/>
            </ul>
        )
    }
}

export default App;