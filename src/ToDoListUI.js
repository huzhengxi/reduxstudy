import {Button, Input, List} from 'antd';
import React from 'react';

const ToDoListUI = (props) => {
    return (<div style={{margin: '10px'}}>
        <div>
            <Input
                placeholder={props.inputValue}
                style={{width: '250px', marginRight: 20}}
                onChange={props.changeInputValue}
                value={props.inputValue}
            />
            <Button type="primary" onClick={props.addItemToList}>增加</Button>
        </div>
        <div style={{marginTop: '10px', width: '300px'}}>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {
                        props.itemClick(index);
                    }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    </div>);
};

export default ToDoListUI;
