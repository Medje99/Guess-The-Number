import { createContext, useState, useReducer, useEffect, useRef } from 'react';
import { combinedReducer} from './NumberReducer';

const NumberContext = createContext()

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const NumberProvider = ({children}) => {
  const [display,setDisplay] = useState(false);
  const [getNumBtn,setGetNumBtn] = useState(false)
  const [guessNumBtn,setGuessNumBtn] = useState(true)
  const [highScore, setHighScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  
  const [state,dispatch] = useReducer(combinedReducer,{
    part1: { currentScore: 0 },
    part2: { currentScore: 0},
  })
  
  const { part1, part2 } = state;
  const currentScore = part1.currentScore + part2.currentScore;

  
  const inputNumber= useRef(null)

  const [initialValue, setInitialValue] = useState({
        digitsNum: 3,
        displayTime:1000,
        number: '***',
        inputValue: '',
    });

    const setDisplayAndButtons = (display,getNum,guessNum) => {
      setDisplay(display);
      setGetNumBtn(getNum);
      setGuessNumBtn(guessNum);
    };


    useEffect(() => {
      const storedData = localStorage.getItem('myData');
      if (storedData) {
        setHighScore(storedData);
      }
    }, []);

    useEffect(() => {
      if(currentScore > highScore){
        setHighScore(currentScore);
        localStorage.setItem('myData', currentScore);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentScore]);


      const getNumber = () => {
          const lowerBound = Math.pow(10, initialValue.digitsNum - 1);
          const upperBound = Math.pow(10, initialValue.digitsNum);
          const newNumber = generateRandomNumber(lowerBound, upperBound);
          
          setInitialValue((prevState) => ({
            ...prevState,
            number: +newNumber,
          }));

          setTimeout( () => {
            setDisplayAndButtons(true,true,false)
          }, initialValue.displayTime);
          
          inputNumber.current.focus();
          setIsCorrect(false)
          setIsWrong(false)
        }


        const handleSelectDigits = (e) => {
            setInitialValue((prevState) => ({
              ...prevState,
              digitsNum: +e.target.value,
            }));
          };
          
        const handleSelectTime = (e) => {
            setInitialValue((prevState) => ({
              ...prevState,
              displayTime: +e.target.value,
            }));
          };
          
          function setStars() {
              const stars = "*".repeat(initialValue.digitsNum);
              setInitialValue(prevState => ({
                ...prevState,
                number: stars
              }));
              }

    const guessNumber = () => {
        if(initialValue.inputValue === initialValue.number){
            dispatch({
                type: `increment_${initialValue.digitsNum}`,
              })

            dispatch({
                type: `increment_${initialValue.displayTime}`,
            })

            setInitialValue(prevState => ({
                ...prevState,
                inputValue: ''
              }));

              setIsCorrect(true)

        }else{
          dispatch({
            type: `decrement_${initialValue.digitsNum}`,
          })

          dispatch({
              type: `decrement_${initialValue.displayTime}`,
          })

          setInitialValue(prevState => ({
            ...prevState,
            inputValue: ''
          }));


          setIsWrong(true)
        }

     


        setDisplayAndButtons(false,false,true)
        setStars()
    }

   const removeZero = () => {
    // eslint-disable-next-line no-restricted-globals
    if ((event.keyCode === 8 || event.key === 'Backspace') && (initialValue.inputValue === 0)) {
      setInitialValue(prevState => ({
        ...prevState,
        inputValue: ''
      }));
    }
  }

    useEffect(() => {   
        setStars()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [initialValue.digitsNum]);
      


      
    return <NumberContext.Provider 
    value={{
        handleSelectDigits,
        handleSelectTime,
        getNumber,
        guessNumber,
        setInitialValue,
        initialValue,
        ...state,
        dispatch, 
        display,
        getNumBtn,
        guessNumBtn,
        inputNumber,
        currentScore,
        highScore,
        isCorrect,
        isWrong,
        removeZero
    }}>
    
    {children}
    
    </NumberContext.Provider>
}

export default NumberContext