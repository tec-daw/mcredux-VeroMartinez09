const initialState = {
    counter: 0,
    lightIsOn: false,
};

const counterReducer = (
    state = initialState, //Estado inicial del estado, cual es el estado que tiene
    action, // lleva qué tipo de acctión quiero hacer e información que ya trae
) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return { // NUEVO ESTADO. Regresa un nuevo objeto, no modifica el original
                ...state, // Destructura el estado para solo modificar una parte (counter)
                counter: state.counter + 1,
            }
        }
        case 'DECREMENT' : {
            return {
                ...state,
            counter: state.counter - action.payload,
            }
        }
        default: {
            return state;
        } 
    }
};

export default counterReducer;