const initialState = {
    
    
};

const faqsReducer = (
    state = initialState, //Estado inicial del estado, cual es el estado que tiene
    action, // lleva qué tipo de acctión quiero hacer e información que ya trae
) => {
    switch(action.type) {
        case 'ADDFAQ' : {
            return { // NUEVO ESTADO. Regresa un nuevo objeto, no modifica el original
                ...state, // Destructura el estado para solo modificar una parte (counter)
                counter: state.counter + 1,

                faqs: {
                    ...state,
                    question: action.payload,
                    ...state,
                    answer: action.payload,
                }
            }
        }
        case 'REMOVEFAQ' : {
            return {
                ...state,
                counter: state.counter - 1,

            }
        }
        case 'REMOVEALL' : {
            return {
                initialState
            }
        }

        case 'UPDATEFAQ': {
              
      
              return {
                ...state,
                counter: state.counter,

                faqs: {
                    ...state,
                    question: action.payload,
                    ...state,
                    answer: action.payload,
                }

            }
            
          }
        
        default: {
            return state;
        } 
    }
};

export default faqsReducer;