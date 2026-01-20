class Dispatcher{
    constructor(){
this.callbacks=[];
    }

    register(callback){
    this.callbacks.push(callback);
    }

    dispatch(action){
     this.callbacks.forEach(el=>el(action));
    }
}

export default new Dispatcher;