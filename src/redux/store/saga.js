import ActionTypes from '../action/types';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {getListAction} from '../action/actionsCreator';


export default function* mySaga() {
    yield takeEvery(ActionTypes.GetSagaList, getList);
}

function* getList() {
    const res = yield  axios.get('https://www.fastmock.site/mock/f37c79a7330ed6c3c91298bfdd3e95c7/react-redux-api/todolist');
    const action = getListAction(res.data.data);
    yield put(action);
}
