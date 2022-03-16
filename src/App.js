import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

   const [result, setResult] = useState("");
   const inputRef = useRef(null);

   useEffect(() => inputRef.current.focus());

   const handleClickButton = (e) => {
      setResult(result.concat(e.target.name));
   }

   // ALL Clear function
   const allClear = () => {
      setResult("")
   }

   // Delete One by one
   const deleteOne = () => {
      setResult(result.slice(0, -1));
   }

   // Calculate Result
   const calculateResult = () => {
      try {
         setResult(eval(result).toString())
      } catch (error) {
         setResult("Error")
      }
   }

   return (
      <div className='bg-gray-600 p-8 rounded-lg w-96'>
         <div>
            <h2 className="text-gray-200 text-center text-3xl">Calculator</h2>
         </div>
         <form>
            <input type="text" value={result} ref={inputRef} className='w-80 h-12 my-6 rounded-lg px-5 outline-none' />
         </form>
         <div className='grid grid-cols-4 gap-4'>
            <button className='col-span-2' onClick={allClear}>C</button>
            <button onClick={deleteOne}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
               </svg>
            </button>
            <button name="+" onClick={handleClickButton}>+</button>
            <button name="7" onClick={handleClickButton}>7</button>
            <button name="8" onClick={handleClickButton}>8</button>
            <button name="9" onClick={handleClickButton}>9</button>
            <button name="-" onClick={handleClickButton}>-</button>
            <button name="4" onClick={handleClickButton}>4</button>
            <button name="5" onClick={handleClickButton}>5</button>
            <button name="6" onClick={handleClickButton}>6</button>
            <button name="*" onClick={handleClickButton}>&times;</button>
            <button name="1" onClick={handleClickButton}>1</button>
            <button name="2" onClick={handleClickButton}>2</button>
            <button name="3" onClick={handleClickButton}>3</button>
            <button name="/" onClick={handleClickButton}>&divide;</button>
            <button name="0" onClick={handleClickButton}>0</button>
            <button name="." onClick={handleClickButton}>.</button>
            <button className='col-span-2' onClick={calculateResult}>=</button>
         </div>
      </div>
   );
}

export default App;
