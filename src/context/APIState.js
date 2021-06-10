import React, {useReducer} from 'react';
import axios from 'axios';
import {apiReducer} from './apiReducer';
import {ApiContext} from './apiContext';
import * as type from './types';

export const APIState = ({children}) => {
    const initialState = {
        items:[],
        loading: false,
        add_form: false
    }
    const [state, dispatch] = useReducer(apiReducer, initialState);

    const showLoader = () => dispatch({type: type.SHOW_LOADER});

    const showAddForm = () => dispatch({type: type.SHOW_ADD_FORM});
    
    const showItemCard = () => dispatch({type: type.SHOW_ITEM_CARD});

    const fetchData = async (url) => {
        showLoader();
        const response = await axios.get(url);
        dispatch({type: type.FETCH_DATA, payload: response.data})
    };

    const addItem = (payload) => dispatch({type: type.ADD_ITEM, payload});

    //FILTER ACTIONS
    const filterVal = {
        id: () => dispatch({type: type.FILTER_ID}),
        firstName: () => dispatch({type: type.FILTER_FIRSTNAME}),
        lastName: () => dispatch({type: type.FILTER_LASTNAME}),
        email: () => dispatch({type: type.FILTER_EMAIL}),
        phone: () => dispatch({type: type.FILTER_PHONE})
    }

    return (
        <ApiContext.Provider value={{showLoader, fetchData, addItem, 
            filterVal, showAddForm, showItemCard,
            loading: state.loading, items: state.items,
            add_form: state.add_form}}>
            {children}
        </ApiContext.Provider>
    )
}