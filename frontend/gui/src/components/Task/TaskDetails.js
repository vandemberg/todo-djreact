import React from 'react';
import { Input, DatePicker, Card, Icon, Row } from 'antd';
import TaskHttp from '../../http/TaskHTTP';
import moment from 'moment';
import Member from '../Members/Member';

export default class Task extends React.Component {

    constructor(props) {
        super(props);
        
        this.observer = props.observer;
        
        this.state = {
            task: props.task
        };        
    }

    editTask = () => {
        let task = this.state.task;

        TaskHttp.update(task.id, {
            title: task.title,
            deadline: task.deadline,
            todo_list: task.todo_list
        })
        .then((result) => {
            this.observer.publish('edit-task', task);
        })
        .catch(error => console.log(error));

    }

    deleteTask = () => {
        let task = this.state.task;

        TaskHttp.delete(task.id)
        .then((result) => {
            this.observer.publish('delete-task', task);
        })
        .catch(error => console.log(error));
    }

    onTaskTitle = (e) => {
        let task = this.state.task;
        task.title = e.target.value;
        this.setState({task});
    }

    onTaskDeadline = (date, dateString) => {
        this.setState({taskDeadline: dateString});
    }

    listMembers = () => {
        let members = [];
        
        for(let index in this.state.task.users) {
            let member = <Member member={this.state.task.users[index]} />
            members.push(member);
        }
        
        return members;

    }

    render() {
        return (
            <div>
                 <Card
                    title="Task Details"
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                              <Icon style={{color: 'red'}} type="delete" onClick={this.deleteTask}/>, 
                              <Icon type="edit" onClick={this.editTask} />
                            ]}
                    >
                    <Row>
                        <DatePicker onChange={this.onTaskDeadline} defaultValue={
                            moment(this.state.task.deadline, 'YYYY-MM-DD')
                            } />
                    </Row>
                    <Row style={{marginTop: '10px'}}>
                        <Input type="text" onChange={this.onTaskTitle}
                                defaultValue={this.state.task.title} />
                    </Row>
                </Card>
                 <Card title="Members" style={{ width: 300, marginTop: 16 }}>
                    {this.listMembers()}
                </Card>
            </div>
        );
    }
}