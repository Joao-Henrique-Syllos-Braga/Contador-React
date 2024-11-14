import { useState } from 'react';
import './App.css';

function App() {
  const [cont, setCont] = useState(0);
  const [text, setText] = useState('Click Here');

  return (
    <>
      <div className="container">
        <button className='contador' onClick={() => {
          setCont(cont + 1);
          setText(cont + 1)

        }}>{text}</button>
      </div>
    </>
  );
}

export default App;
