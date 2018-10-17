import React from 'react';
import { Card, Col, Button, Input, Row, Form, DatePicker  } from 'antd';
import Task from '../Task/Task';
import TODOListHTTP from '../../http/TODOListHTTP';
import TaskHttp from '../../http/TaskHTTP';

export default class TODOList extends React.Component {
    
    state = {
        todoList: {},
        taskTitle: null,
        taskDeadline: null
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

    onTaskTitle = (e) => {
        this.setState({taskTitle: e.target.value});
    }

    onTaskDeadline = (date, dateString) => {
        this.setState({taskDeadline: dateString});
    }

    delete = (e) => {
        e.preventDefault();
        TODOListHTTP.delete(this.state.todoList.id)
            .then((result) => {
                this.observer.publish('delete-todo-list', this.state.todoList.index);
            });
    }

    listTasks = () => {
        let tasks = [];

        for(let index in this.state.todoList.tasks) {
            
            let my_task = this.state.todoList.tasks[index];
            my_task.index = index;
            
            let taskTag = <Task 
                            observer={this.observer} 
                            task={my_task} 
                            key={index} 
                            style={{marginRight: '10px'}}/>
            tasks.push(taskTag);
        }

        if(tasks.length === 0) {
            return <center> No one tasks</center>
        }

        return tasks;
    }

    createNewTask = (e) => {
        e.preventDefault();
        let data = {
            title: this.state.taskTitle,
            todo_list: this.state.todoList.id,
            deadline: this.state.taskDeadline
        };
        TaskHttp.create(data)
            .then((result) => {
                let task = result.data;
                let tasks = this.state.todoList.tasks;
                tasks.push(task);
                this.setState({tasks});
            });
    }

    componentDidUpdate() {
        this.listTasks();
    }

    render() {
        return (
            <Col span={10}>
                <Card
                    title={<Input type="text" onChange={this.updateTitle} value={this.state.todoList.title} style={{marginRight: '2px'}}/>}
                    extra={
                        <div>
                            <Button type="dashed" style={{marginRight: '10px'}}
                                onClick={this.update}> Edit </Button>
                            <Button type="danger" onClick={this.delete}>  Remove </Button>

                        </div>
                        }
                    style={{ width: 400, marginBottom: '10px' }}
                >
                        <Row>
                            <Form onSubmit={this.createNewTask}>
                                <Col span={8} style={{paddingRight: "5px"}}>
                                        <DatePicker onChange={this.onTaskDeadline}/>
                                </Col>
                                <Col span={8} style={{paddingRight: "10px"}}>
                                    <Input type="text" placeholder="New Task?" onChange={this.onTaskTitle}/>
                                </Col>
                                <Col span={8}><Button type="primary" htmlType="submit"> New </Button></Col>
                            </Form>
                        </Row>
                        <Row>
                            {this.listTasks()}
                        </Row>                    
                </Card>
            </Col>
        )
    }
}