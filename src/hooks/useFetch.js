import { useEffect, useReducer, useCallback } from "react";
import { ACTIONS } from "../actions/fetch";
import { API } from "../API"
import { fetchReducer, initialState } from "../reducers/fetch";

export const useFetch = (endpoint) => {
  
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    const getData = useCallback (async () => {
        try {
            const { data } = await API.get(`${endpoint}`);
            dispatch({ type: ACTIONS.SET_DATA, payload: data});
        } catch (e) {  
            dispatch({ type: ACTIONS.SET_ERROR });
            console.error(e);  
     }
    }, [endpoint]);

    useEffect(() => {
        getData();
    }, [endpoint, getData]);

    return state;
};