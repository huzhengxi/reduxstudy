import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './redux/store';
import {
    addItemToListActiion,
    changeInputValueAction,
    getListBySaga,
    itemClickAction
} from './redux/action/actionsCreator';
import ToDoListUI from './ToDoListUI';

export default class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange);
    }

    componentDidMount() {
        this.mounted = true;
        this.getList();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <ToDoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItemToList={this.addItemToList}
                itemClick={this.itemClick}
                getList={this.getList}
                list={this.state.list}
            />
        );
    }

    changeInputValue = (e) => {
        store.dispatch(changeInputValueAction(e.target.value));
    };

    storeChange = () => {
        this.setState(store.getState());
    };

    addItemToList = () => {
        store.dispatch(addItemToListActiion());
    };

    itemClick = (index) => {
        store.dispatch(itemClickAction(index));
    };

    getList = () => {
        store.dispatch(getListBySaga());
    };
}
