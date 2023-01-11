import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault();

        if (enteredUsername.trim() === '' || enteredAge.trim() === '') {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        };

        if (Number(enteredAge) <= 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0).'
            })
            return;
        };

        const userObj = {
            id: Math.random().toString(),
            username: enteredUsername,
            age: enteredAge
        };
        props.addNewUser(userObj);
        setEnteredUsername('');
        setEnteredAge('');

        console.log(enteredUsername, enteredAge);
    }

    const errorHandler = () => {
        setError(null)
    }


    return (
        <div>
            {error && <ErrorModal 
                        closeErrorModal={errorHandler} 
                        title={error.title} 
                        message={error.message} 
                    />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username' type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age' type="number"
                        step="1" value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;