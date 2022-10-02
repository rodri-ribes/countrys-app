
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ordAlpha, ordPop } from '../../../components/functionsOrder/order.js'


export const userSlice = createSlice({
    name: "user",
    initialState: {
        countrys: [],
        country: [],
        activities: [],
        error: false,
    },
    reducers: {
        addCountrys: (state, actions) => {
            state.countrys = actions.payload
        },
        addCountry: (state, actions) => {
            state.country = actions.payload
        },
        orderAlpha: (state, actions) => {
            state.countrys = state.countrys.slice().sort(ordAlpha)
        },
        orderAlphaRev: (state, actions) => {
            state.countrys = state.countrys.slice().sort(ordAlpha).reverse()
        },
        orderPop: (state, actions) => {
            state.countrys = state.countrys.slice().sort(ordPop)
        },
        orderPopRev: (state, actions) => {
            state.countrys = state.countrys.slice().sort(ordPop).reverse()
        },
        orderContinent: (state, actions) => {
            state.countrys = state.countrys.filter((c) => c.continent === actions.payload)
        },
        search: (state, actions) => {
            state.search = actions.payload;
            state.error = false;
        },
        errorTrue: (state, actions) => {
            state.error = actions.payload;
        },
        errorFalse: (state, actions) => {
            state.error = actions.payload;
        },
        addActivities: (state, actions) => {
            state.activities = actions.payload;
        },
        filterActivities: (state, actions) => {
            state.countrys = state.countrys.filter(a => {
                if (a.activities.length !== 0) {
                    if (a.activities.length > 1) {
                        for (let i = 0; i < a.activities.length; i++) {
                            if (a.activities[i].name === actions.payload) {
                                return a.activities[i]
                            }
                        }
                    } else {
                        return a.activities[0].name === actions.payload
                    }
                }
                return 0;
            })
        },
    }
})

export const { filterActivities, addActivities, errorFalse, errorTrue, search, orderContinent, orderPopRev, orderPop, orderAlphaRev, orderAlpha, addCountry, addCountrys
} = userSlice.actions;

export default userSlice.reducer;

export const getCountrys = () => async (dispatch) => {
    try {
        const Countrys = await axios.get(`${process.env.REACT_APP_API}/countries/all`);
        dispatch(addCountrys(Countrys.data))
    } catch (error) {
        console.log(error)
    }
}
export const getCountry = (value) => async (dispatch) => {
    const Country = await axios.get(`${process.env.REACT_APP_API}/countries/one/${value}`);
    dispatch(addCountry(Country.data))

};

export const orderAlphaAction = () => dispatch => {
    dispatch(orderAlpha())
}

export const orderAlphaRevAction = () => dispatch => {
    dispatch(orderAlphaRev())
}

export const orderPopAction = () => dispatch => {
    dispatch(orderPop())
}

export const orderPopRevAction = () => dispatch => {
    dispatch(orderPopRev())
}

export const orderContinentAction = (region) => dispatch => {
    dispatch(orderContinent(region))
}

export const errorFalseAction = () => dispatch => {
    dispatch(errorFalse(false))
};

export const searchAction = (value) => async (dispatch) => {

    dispatch(search(value))
};

export const getActivitiesAction = () => async (dispatch) => {
    try {
        const activitys = await axios.get(`${process.env.REACT_APP_API}/activities`);
        dispatch(addActivities(activitys.data))
    } catch (error) {
        console.log(error)
    }
}

export const filterActivitiesAction = (value) => dispatch => {
    dispatch(filterActivities(value))
}