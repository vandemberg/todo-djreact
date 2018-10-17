import React from 'react';
import { Card, Col, Button, Input  } from 'antd';
import Task from '../Task/Task';
import TODOListHTTP from '../../http/TODOListHTTP';

export default class TODOList extends React.Component {
    
    state = {
        todoList: {}
    }

    constructor(props){
        super(props);
        this.observer = props.observer;
    }

    componentDidMount() {
        this.setState({
            todoList: this.props.todoList
        });
    }

    update = (e) => {
        e.preventDefault();
        let data = {title: this.state.todoList.title};
        TODOListHTTP.update(this.state.todoList.id, data);
    }

    updateTitle = (e) => {
        let todoList = this.state.todoList;
        todoList.title = e.target.value;
        this.setState({todoList});
    }

    delete = (e) => {
        e.preventDefault();
        TODOListHTTP.delete(this.state.todoList.id)
            .then((result) => {
                this.observer.publish('delete-todo-list', this.state.todoList.index);
            });
    }

    render() {
        return (
            <Col span={6}>
                <Card
                    title={<Input type="text" onChange={this.updateTitle} value={this.state.todoList.title} style={{marginRight: '2px'}}/>}
                    extra={
                        <div>
                            <Button type="dashed" style={{marginRight: '10px'}}
                                onClick={this.update}
                            > Editar </Button>
                            <Button type="danger" onClick={this.delete}>  Remover </Button>

                            </div>
                        }
                    style={{ width: 400, marginBottom: '10px' }}
                >
                    <div><Task></Task></div>
                </Card>
            </Col>
        )
    }
}