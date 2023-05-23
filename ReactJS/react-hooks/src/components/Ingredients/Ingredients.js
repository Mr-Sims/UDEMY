import React, {
  useCallback,
  useReducer,
  useMemo,
  useEffect,
} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';


const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(i => i.id !== action.id);
    default:
      throw new Error('Should not have ended here!')
  }
};

function Ingredients() {

  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const { 
    isLoading, 
    error, 
    data, 
    sendRequest, 
    reqExtra, 
    reqIdentifier,
    clear 
  } = useHttp();


  useEffect(() => {
    
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatchIngredients({ type: 'DELETE', id: reqExtra })
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatchIngredients({
        type: 'ADD', 
        ingredient: {id: data.name, ...reqExtra}})
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error])

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: 'SET', ingredients: filteredIngredients })
  }, [])



  const addIngredientHandler = useCallback((newIngredient) => {

    sendRequest(
      'https://fir-react-http-deb7f-default-rtdb.firebaseio.com/ingredients.json',
      'POST',
      JSON.stringify(newIngredient),
      newIngredient,
      'ADD_INGREDIENT'
    );
    
  }, [sendRequest]);

  const removeIngredientHandler = useCallback((ingredientId) => {
    sendRequest(
      `https://fir-react-http-deb7f-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      'DELETE',
      null,
      ingredientId,
      'REMOVE_INGREDIENT'
    );

  }, [sendRequest]);
  

  const ingredientsListUseMemo = useMemo(() => {
    return <IngredientList
      ingredients={ingredients}
      onRemoveItem={removeIngredientHandler}
    />
  }, [ingredients, removeIngredientHandler])


  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientsListUseMemo}
        {/* <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        /> */}
      </section>
    </div>
  );
}

export default Ingredients;
