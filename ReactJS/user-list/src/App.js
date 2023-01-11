import React from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import { useState } from 'react';



const constUsers = [
	{
		id: '1',
		username: 'Gringo',
		age: '60'
	},
	{
		id: '2',
		username: 'Kid',
		age: '10'
	}
]

function App() {

	const [users, setUsers] = useState(constUsers);

	const addUserHandler = (userObj) => {
		setUsers(state => 
			[userObj,
			...state]
		)
	}

	

	return (
		<div>
			<AddUser addNewUser={addUserHandler}/>
			<UserList users={users} />
		</div>
	);
}

export default App;
