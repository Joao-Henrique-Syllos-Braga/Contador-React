import { useState } from 'react';
import './App.css';
import Div from './components/container';
import Button from './components/button';

function App() {
  const [cont, setCont] = useState(0);
  const [text, setText] = useState('Click Here');

  return (
    <>

    <Div className="container">
      <Button className="contador"onClick={() => {
          setCont(cont + 1);
          setText(cont + 1)
        }}>{text}</Button>


    </Div>
      
    </>
  );
}

export default App;
