import React, {Component} from 'react';
import {Button, Input, List} from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import ActionTypes from './store/types';

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
            <div style={{margin: '10px'}}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{width: '250px', marginRight: 20}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.addItemToList}>增加</Button>
                </div>
                <div style={{marginTop: '10px', width: '300px'}} >
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (
                            <List.Item >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }

    changeInputValue(e) {
        const action = {
            type: ActionTypes.InputChangeValue,
            value: e.target.value
        };
        store.dispatch(action);
    }

    storeChange() {
        this.setState(store.getState());
    }

    addItemToList = () => {
        store.dispatch({
            type: ActionTypes.AddItem,
        });
    };
}
