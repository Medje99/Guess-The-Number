import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

function Game() {
      const {getNumber,guessNumber,initialValue,setInitialValue, display,getNumBtn,guessNumBtn,inputNumber,removeZero} = useContext(NumberContext)
    
      const style = {
        display: display ? 'none' : 'block',
        userSelect: 'none'
      };



  return (
        <div className='main__game'>
            <div className='main__game_number'>
                  <div className='main__game_number_active'>
                      <span style={style}>{initialValue.number}</span>
                  </div>
                  <button type="submit" className='btn__one' onClick={getNumber} disabled={getNumBtn}>Get Number</button>
            </div>
            <div className='main__game_guess'>
                  <input type="number" value={initialValue.inputValue} ref={inputNumber} onChange={(e) => setInitialValue((prevState) => ({
                        ...prevState,
                        inputValue: +e.target.value,
                  }))} 
                  onKeyDown={removeZero}
                  />
                  <button type="submit" className='btn__two' onClick={guessNumber} disabled={guessNumBtn} >Guess Number</button>



            </div>
        </div>
  )
}

export default Game