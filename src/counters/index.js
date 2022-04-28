import { combineReducers } from "redux";

import counterReducer from "./counter";
import lightReducer from "./light";
import faqsReducer from "./faqs";

import todosReducer from './faqs'
// Combinando ambos Reducers. RuteReducers

const rootReducer = combineReducers({
    counter: counterReducer, // Asi vamos a ocupar la infor de cada Reducer, nombre corto
    light: lightReducer,
    faqs: faqsReducer,
});

export default rootReducer;
