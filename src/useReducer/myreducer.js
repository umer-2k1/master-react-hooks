const myreducer = (state, action)=>{
    switch (action.type) {
        case "INCREMENT":
            return state = state+1;
        
        case "DECREMENT":
            return state = state <=0 ? state : state-1;
        
        case "RESET":
            return state = 0;
    
            
    
        default:
            return state;
    }
    // if (action.type==="INCREMENT") {
    //     return state = state+1
    // }

    // if (action.type==="DECREMENT") {
    //     return state = state <=0 ? state : state-1
    // }
    // if (action.type==="RESET") {
    //     return state = 0
    // }
    // return state

}
export default myreducer