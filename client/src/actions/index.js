import axios from 'axios';


import {
  GET_COUNTRYS,
  ORDER_ALPHA,
  ORDER_ALPHA_REV,
  ORDER_POP,
  ORDER_POP_REV,
  ORDER_CONTINENT,
  SEARCH,
  ERROR_TRUE,
  ERROR_FALSE,
  GET_COUNTRY,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES
} from './types.js'


export const getCountrys = () => async (dispatch) => {
  try {
    const Countrys = await axios.get(`${process.env.REACT_APP_API}`);
    dispatch({ type: GET_COUNTRYS, payload: Countrys.data })
  } catch (error) {
    console.log(error)
  }
}
export const getCountry = (value) => async (dispatch) => {
  const Country = await axios.get(`${process.env.REACT_APP_API}/countries?name=${value}`);
  dispatch({ type: GET_COUNTRY, payload: Country.data })

};

export function orderAlpha() {
  return {
    type: ORDER_ALPHA,
  };
}

export function orderAlphaRev() {
  return {
    type: ORDER_ALPHA_REV,
  };
}

export function orderPop() {
  return {
    type: ORDER_POP,
  };
}

export function orderPopRev() {
  return {
    type: ORDER_POP_REV,
  };
}

export const orderCont = (payload) => {

  return {
    type: ORDER_CONTINENT,
    payload: payload
  };
};
export const errorFalse = () => {

  return {
    type: ERROR_FALSE,
    payload: false
  };
};

export const search = (value) => async (dispatch) => {
  const Countrys = await axios.get(`${process.env.REACT_APP_API}/countries?name=${value}`);
  if (!Countrys.data.message) {
    dispatch({ type: SEARCH, payload: Countrys.data })
  } else {
    dispatch({ type: ERROR_TRUE, payload: true })
  }
};

export const getActivities = () => async (dispatch) => {
  try {
    const activitys = await axios.get(`${process.env.REACT_APP_API}/activities`);
    dispatch({ type: GET_ACTIVITIES, payload: activitys.data })
  } catch (error) {
    console.log(error)
  }
}

export const filterActivities = (value) => {
  return {
    type: FILTER_ACTIVITIES,
    payload: value
  }
}