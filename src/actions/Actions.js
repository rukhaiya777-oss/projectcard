import Dispatcher  from "../dispatcher/Dispatcher";

export const increment=()=>{
    Dispatcher.dispatch({type:"increment"});
}

export const decrement=()=>{
    Dispatcher.dispatch({type:"decrement"});
}

// export const increment=()=>{
//     return{
//         type:"increment"
//     };
// };

// export const decrement=()=>{
//     return{
//         type:"decrement"
//     };
// };