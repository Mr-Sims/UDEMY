import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {

  const [showParagrpaph, setShowParagraph] = useState(false);
  const [allowToggle, setallowToggle] = useState(false);


  console.log('app running')

  const paragraphToggle = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(state => !state);
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setallowToggle(state => !state);
  }


  return (
    <div className="app">
      <h1>Hi there!</h1>
      
      <DemoOutput show={showParagrpaph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={paragraphToggle}>Push me!</Button>

    </div>
  );
}

export default App;
