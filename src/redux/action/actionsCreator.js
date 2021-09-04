import ActionTypes from './types';


const changeInputValueAction = (value) => {
    return {
        type: ActionTypes.InputChangeValue,
        value: value
    };
};

const addItemToListActiion = () => {
    return {
        type: ActionTypes.AddItem
    };
};

const itemClickAction = (index) => {
    return {
        type: ActionTypes.DeleteItem,
        index
    };
};

export {
    changeInputValueAction,
    addItemToListActiion,
    itemClickAction
};
