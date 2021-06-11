import * as type from "./types";

const handler = {
    [type.SHOW_LOADER]: state => ({...state, loading: true}),
    [type.SHOW_ADD_FORM]: state => ({...state, add_form: !state.add_form}),
    [type.SHOW_ITEM_CARD]: state => ({...state, item_card: !state.item_card}),
    [type.SET_FLAG]: state => ({...state, flag: !state.flag}),
    [type.SET_FLAG_TYPE]: (state, setType) => {
        let newState = {...state};
        if(state.flagType.setType === setType.setType){
            newState.items = newState.items.reverse();
            return {...state, items: newState.items, flagType: '', loading: false}
        }
        return {...state, flagType: setType, loading: false}
    },
    [type.ADD_ITEM]: (state, payload) => ({
        ...state, 
        items: [...state.items, payload]
    }),
    [type.FETCH_DATA]: (state, {payload}) => ({...state, items: payload, loading: false, flagType: ''}),
    
    [type.FILTER_ID]: state => ({...state, items: [...state.items.sort((a,b) => (a.id > b.id ? 1 : -1))]}),
    [type.FILTER_FIRSTNAME]: state => ({...state, items: [...state.items.sort((a,b) => (a.firstName > b.firstName ? 1 : -1))]}),
    [type.FILTER_LASTNAME]: state => ({...state, items: [...state.items.sort((a,b) => (a.lastName > b.lastName ? 1 : -1))]}),
    [type.FILTER_EMAIL]: state => ({...state, items: [...state.items.sort((a,b) => (a.email > b.email ? 1 : -1))]}),
    [type.FILTER_PHONE]: state => ({...state, items: [...state.items.sort((a,b) => (a.phone > b.phone ? 1 : -1))]}),
    DEFAULT: state => state
}

export const apiReducer = (state, action) => {
    const handle = handler[action.type] || handler.DEFAULT;
    return handle(state, action)
}