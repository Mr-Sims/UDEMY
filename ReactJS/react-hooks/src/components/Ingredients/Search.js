import React, { useEffect, useState, useRef } from 'react';

import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;

        sendRequest(
          'https://fir-react-http-deb7f-default-rtdb.firebaseio.com/ingredients.json' + query,
          'GET',
        )

      }
    }, 500);
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, onLoadIngredients, inputRef, sendRequest])

  useEffect(() => {
    if (!isLoading && !error && data) {

        const loadedIngredients = [];
        for (const i in data) {
          const ingredient = {
            id: i,
            title: data[i].title,
            amount: data[i].amount,
          }
          loadedIngredients.push(ingredient);
        }
        onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>isLoading</span>}
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
