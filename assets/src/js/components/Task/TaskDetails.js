import React from 'react';
import { Input, DatePicker, Card, Icon, Row, Col, Select, Button } from 'antd';
import TaskHttp from '../../http/TaskHTTP';
import UserHttp from '../../http/UserHTTP';
import moment from 'moment';
import Member from '../Members/Member';
import MemberHttp from '../../http/MemberHTTP';


const Option = Select.Option;


export default class Task extends React.Component {

    constructor(props) {
        super(props);
        
        this.observer = props.observer;
        this.userIdAdd = null;
        this.state = {
            task: props.task
        };        
    }

    componentDidMount() {
        this.observer.subscribe("remove-task-user", (index) => {
            let task = this.state.task;
            task.members.slice(index, 1);
            this.setState({task: task});
        });

        UserHttp.list()
            .then((result) => {
                this.setState({
                    users: result.data
                });
            })
    }

    componentDidUpdate() {
        this.listUsers();
        this.listMembers();
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
            console.log(this.state.task.users[index]);
            let member = <Member member={this.state.task.users[index]} 
                                 task={this.state.task} 
                                 index={index}
                                 observer={this.observer}
                                 key={index} />
            members.push(member);
        }
        
        return members;

    }

    onSelectUser = (value) => {
        this.userIdAdd = value;
    }

    listUsers = () => {
        let users = [];

        for(let index in this.state.users) {
            let user = this.state.users[index];
            let component = <Option value={user.pk} key={index}> {user.username} </Option>
            users.push(component);
        }

        return users;
    }
    
    addMember = () => {
        MemberHttp.create({
            user: this.userIdAdd,
            task: this.state.task.id 
        })
        .then(result => {
            let task_user = result.data;
            MemberHttp.list(task_user.user_id, task_user.task_id)
                .then(result => {
                    let task = this.state.task;
                    task.users.push(result.data);
                    this.setState({task});
                });
        })
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
                <Card title="Add Member" style={{ width: 300, marginTop: 16 }}>
                    <Row>
                        <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a member"
                        optionFilterProp="children"
                        onChange={this.onSelectUser}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                            
                            {this.listUsers()}
                        
                        </Select>                    
                    </Row>
                    <br/>
                    <Row>
                        <Button type="primary" onClick={this.addMember}> Add </Button>
                    </Row>
                </Card>
                 <Card title="Members" style={{ width: 300, marginTop: 16 }}>
                    {this.listMembers()}
                </Card>
            </div>
        );
    }
}