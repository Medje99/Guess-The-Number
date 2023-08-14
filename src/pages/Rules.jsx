import React from 'react'
import { Link } from 'react-router-dom'

function Rules() {
  return (
    <div className='container__rules'>
        <div className='correctGuess'>
        <Link to='/' className='gameLink'>
              Game
        </Link>
            <h1>Correct Guess</h1>
            <div className='table_digits'>  
                    <table>
                    <caption>Points based on digits</caption>
                    <thead>
                        <tr>
                            <th>Digits</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>+0.25</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>+0.5</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>+1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>+1.5</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>+2</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            <div className='table_time'>  
                    <table>
                        <caption>Points based on time</caption>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1000ms</td>
                                <td>+0.25</td>
                            </tr>
                            <tr>
                                <td>750ms</td>
                                <td>+0.5</td>
                            </tr>
                            <tr>
                                <td>500ms</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>250ms</td>
                                <td>+2</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>



        <div className='wrongGuess'>
        <h1>Wrong Guess</h1>

        <div className='table_digits'>  
                    <table>
                    <caption>Points based on digits</caption>
                    <thead>
                        <tr>
                            <th>Digits</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>-2</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-1.5</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>-0.5</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>-0.25</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            <div className='table_time'>  
                    <table>
                        <caption>Points based on time</caption>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1000ms</td>
                                <td>-2</td>
                            </tr>
                            <tr>
                                <td>750ms</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>500ms</td>
                                <td>-0.5</td>
                            </tr>
                            <tr>
                                <td>250ms</td>
                                <td>-0.25</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
)
}

export default Rules