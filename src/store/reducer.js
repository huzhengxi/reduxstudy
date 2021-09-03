import ActionTypes from './types';


const defaultInputValue = 'Write Something';
const defaultState = {
    inputValue: defaultInputValue,
    list: [
        '8点开晨会，分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '中午和老板吃饭'
    ]
};
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
        default:
            return state;
    }
}
