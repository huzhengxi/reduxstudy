import ActionTypes from '../action/types';


const defaultInputValue = 'Write Something';
export const defaultState = {
    inputValue: defaultInputValue,
    list: []
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ActionTypes.InputChangeValue:
            return {
                ...state,
                inputValue: action.value
            };
        case ActionTypes.AddItem:
            const {list, inputValue} = state;
            return {
                ...state,
                list: [...list, inputValue],
                inputValue: defaultInputValue
            };
        case ActionTypes.DeleteItem:
            const newState = {...state};
            newState.list.splice(action.index, 1);
            return newState;
        case ActionTypes.GetList:
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
}
