const initialState = {
    lightIsOn: false,
};

const lightReducer = (
    state = initialState, //Estado inicial del estado, cual es el estado que tiene
    action,
) => {
    switch(action.type) {
        case 'TURN_ON' : {
            return { // NUEVO ESTADO. Regresa un nuevo objeto, no modifica el original
                ...state, // Destructura el estado para solo modificar una parte (counter)
                lightIsOn: true,
            }
        }
        case 'TURN_OFF' : {
            return {
                ...state,
                lightIsOn: false,
            }
        }
        default: {
            return state;
        } 
    }
};

export default lightReducer;