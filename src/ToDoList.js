import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './redux/store';
import {addItemToListActiion, changeInputValueAction, itemClickAction} from './redux/action/actionsCreator';
import ToDoListUI from './ToDoListUI';

export default class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <ToDoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItemToList={this.addItemToList}
                itemClick={this.itemClick}
                list={this.state.list}
            />
        );
    }

    changeInputValue(e) {
        store.dispatch(changeInputValueAction(e.target.value));
    }

    storeChange() {
        this.setState(store.getState());
    }

    addItemToList = () => {
        store.dispatch(addItemToListActiion());
    };

    itemClick = (index) => {
        store.dispatch(itemClickAction(index));
    };
}
