import {
    GET_COUNTRYS, ORDER_ALPHA, ORDER_ALPHA_REV, ORDER_POP, ORDER_POP_REV, ORDER_CONTINENT, SEARCH, ERROR_TRUE, ERROR_FALSE, GET_COUNTRY, GET_ACTIVITIES, FILTER_ACTIVITIES
} from '../actions/types.js'

import {ordAlpha, ordPop} from '../components/functionsOrder/order.js'

const initialState = {
    countrys: [],
    country: [],
    activities: [],
    error: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_COUNTRYS:
            return{
                ...state,
                countrys: action.payload
            }
        case GET_COUNTRY:
            return{
                ...state,
                country: action.payload
            }
        case ORDER_ALPHA:
            return{
                ...state,
                countrys: state.countrys.slice().sort(ordAlpha),
            }
        case ORDER_ALPHA_REV:
            return{
                ...state,
                countrys: state.countrys.slice().sort(ordAlpha).reverse(),
            }
        case ORDER_POP:
                return{
                    ...state,
                    countrys: state.countrys.slice().sort(ordPop),
                }
        case ORDER_POP_REV:
            return{
                ...state,
                countrys: state.countrys.slice().sort(ordPop).reverse(),
            }
        case ORDER_CONTINENT: {
            return {
                ...state,
                countrys: state.countrys.filter((c) => c.continent === action.payload),
            };
        }
        case SEARCH: {
            return {
                ...state,
                countrys: action.payload,
                error: false
            };
        }
        case ERROR_TRUE: {
            return {
                ...state,
                error: action.payload
            };
        }
        case ERROR_FALSE: {
            return {
                ...state,
                error: action.payload
            };
        }
        case GET_ACTIVITIES: {
            return {
                ...state,
                activities: action.payload
            };
        }

        case FILTER_ACTIVITIES:{
            return {
                ...state,
                countrys: state.countrys.filter(a => {
                    if(a.activities.length !== 0){
                        if(a.activities.length > 1){
                            for (let i = 0; i < a.activities.length; i++) {
                                if(a.activities[i].name === action.payload){
                                    return a.activities[i]
                                }
                            }
                        }else{
                            return a.activities[0].name === action.payload
                        }
                    }
                    return 0;
                })
            }
        }
        default:
            return state;
    }
}