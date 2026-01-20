
const initialvalue={
    count:0
}

function conuntreducer(state=initialvalue,action){
    switch(action.type){
        case "increment":
            return{
            ...state,
            count:state.count+1
            }
            case "decrement":
            return{
            ...state,
            count:state.count-1
            }

            default:
                return state;

    }
}

export default conuntreducer;