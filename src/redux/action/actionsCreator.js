import ActionTypes from './types';
import axios from 'axios';


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
const getListAction = (data) => {
    return {
        type: ActionTypes.GetList,
        data
    };
};
const getListBySaga = () => {
    return {
        type: ActionTypes.GetSagaList
    };
};

const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/f37c79a7330ed6c3c91298bfdd3e95c7/react-redux-api/todolist')
            .then(res => {
                if (res.status === 200) {
                    return res.data;
                }
            }).then(data => {
            const action = getListAction(data.data);
            dispatch(action);
        });
    };
};

export {
    changeInputValueAction,
    addItemToListActiion,
    itemClickAction,
    getListAction,
    getTodoList,
    getListBySaga
};
