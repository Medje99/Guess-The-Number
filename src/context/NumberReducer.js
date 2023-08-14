export const numberReducerInc = (state = { currentScore: 0 },action) => {
    switch(action.type){
        case 'increment_3':
            return{
                ...state,
                currentScore: state.currentScore + 0.25 ,
        }
        case 'increment_4':
            return{
                ...state,
                currentScore: state.currentScore + 0.5 ,
        }
        case 'increment_5':
            return{
                ...state,
                currentScore: state.currentScore + 1 ,
        }
        case 'increment_6':
            return{
                ...state,
                currentScore: state.currentScore + 1.5 ,
        }
        case 'increment_7':
            return{
                ...state,
                currentScore: state.currentScore + 2,
        }

        case 'increment_1000':
            return{
                ...state,
                currentScore: state.currentScore + 0.25,
        }
        case 'increment_750':
            return{
                ...state,
                currentScore: state.currentScore + 0.5,
        }
        case 'increment_500':
            return{
                ...state,
                currentScore: state.currentScore + 1,
        }
        case 'increment_250':
            return{
                ...state,
                 currentScore: state.currentScore + 2,
        }
        default:
            return state
    }
}


export const numberReducerDec = (state = { currentScore: 0 },action) => {
    switch(action.type){
        case 'decrement_3':
            return{
                ...state,
                currentScore: state.currentScore - 2 ,
        }
        case 'decrement_4':
            return{
                ...state,
                currentScore: state.currentScore - 1.5 ,
        }
        case 'decrement_5':
            return{
                ...state,
                currentScore: state.currentScore - 1 ,
        }
        case 'decrement_6':
            return{
                ...state,
                currentScore: state.currentScore - 0.5 ,
        }
        case 'decrement_7':
            return{
                ...state,
                currentScore: state.currentScore - 0.25,
        }

        case 'decrement_1000':
            return{
                ...state,
                currentScore: state.currentScore - 2,
        }
        case 'decrement_750':
            return{
                ...state,
                currentScore: state.currentScore - 1.5,
        }
        case 'decrement_500':
            return{
                ...state,
                currentScore: state.currentScore - 1,
        }
        case 'decrement_250':
            return{
                ...state,
                 currentScore: state.currentScore - 0.5,
        }
        default:
            return state
    }
} 


export function combinedReducer(state, action) {
    return {
      part1: numberReducerInc(state.part1, action),
      part2: numberReducerDec(state.part2, action),
    };
  }