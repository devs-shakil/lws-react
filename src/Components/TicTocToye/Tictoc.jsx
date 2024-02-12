import { useState } from 'react'
import './App.css'
// import Gallery from './Components/Gallery'

function Square({value, onSquareClick}){
  return (
    <button className='bg-white border border-gray-100 shadow-md  h-12 w-12 m-1 leading-9 text-lg ' onClick={onSquareClick}>
      {value}
    </button>
  )
}

function Board() {
  const [squares, setSquares] = useState(Array().fill((null)));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick (i){
    const nextSquare = squares.slice();

    if(squares[i]){
      return
    }
    if(xIsNext){
      nextSquare[i] = "X";
    }else{
      nextSquare[i] = "O";
    }
    setSquares(nextSquare)
    setXIsNext(!xIsNext)
  }
  return (
    <>
      <div className='flex items-center justify-center  max-w-52 bg-gray-50 rounded-md mx-auto mt-10 p-2'>
          <div className="flex items-center flex-col gap-2">
                <Square value={squares[0]} onSquareClick = {() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick = {() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick = {() => handleClick(2)} />
               
            </div>
            <div className="flex items-center flex-col gap-2">
                <Square value={squares[3]} onSquareClick = {() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick = {() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick = {() => handleClick(5)} />
                
            </div>
            <div className="flex items-center flex-col gap-2">
                <Square value={squares[6]} onSquareClick = {() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick = {() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick = {() => handleClick(8)} />
                
            </div>
          
      </div>  
        
      
    </>
  )
}

export default Board
