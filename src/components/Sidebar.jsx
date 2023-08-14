import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

function Sidebar() {
    const {handleSelectDigits,handleSelectTime,highScore,currentScore,isCorrect,isWrong} = useContext(NumberContext)


     

  return (
      <div className='main__sidebar'>
          <form>
                        <div className="option__digits">
                            <label>Choose the number of digits</label><br/>
                                <select  name="digits" onChange={handleSelectDigits}>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                </select>
                        </div>

                        <div className="option__time">
                            <label>Choose time of display</label><br/>
                                <select  name="time" onChange={handleSelectTime}>
                                    <option value={1000}>1s</option>
                                    <option value={750}>0.75s</option>
                                    <option value={500}>0.5s</option>
                                    <option value={250}>0.25s</option>
                                </select>
                        </div>
            </form>

            <div className='scoreBoard'>
                  <div className='scoreBoard__current'> 
                      Score<br/>
                      <span className={`${isCorrect ? 'colorChange__green' : ''} ${isWrong ? 'colorChange__red' : ''}`}>{currentScore}</span>
                  </div>
                  <div className='scoreBoard__highScore'>
                      High Score<br/>
                      <span>{highScore}</span>
                  </div>
            </div>
      </div>
  )
}

export default Sidebar