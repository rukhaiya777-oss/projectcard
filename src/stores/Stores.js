// import {createStore} from "@reduxjs/toolkit"
// import conuntreducer from "../reducers/Reducer.js";
// const store=createStore(conuntreducer);

// export default store;

import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../reducers/Counterslice.js" 

const store=configureStore({
    reducer: counterReducer
})

export default store;
















































import Dispatcher from "../dispatcher/Dispatcher.js";

let count=0;

let listeners=[];

const Store={
    getcount(){
        return count;
    },

    AddChangeListener(listener){
        listeners.push(listener);
    },

    emitchange(){
        listeners.forEach(el=>el());
    }

    };

    Dispatcher.register(action=>{
        switch(action.type){
            case "increment":
                count++;
                Store.emitchange();
                break;
                 case "decrement":
                count--;
                Store.emitchange();
                break;
                default:
                break;
        }
    })

    export default Store;


