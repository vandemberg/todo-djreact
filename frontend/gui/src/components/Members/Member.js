import React from 'react';
import {Row, Col, Button} from 'antd';
import MemberHttp from '../../http/MemberHTTP';

export default class Member extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            member: props.member,
            task: props.task
        }
        this.observer = props.observer;
    }

    removeUser = (e) => {
        MemberHttp.list(this.state.member.pk, this.state.task.id)
            .then(result => {
                MemberHttp.delete(result.data.id)
                    .then((result) => {
                        this.observer.publish('remove-task-user', this.props.index);
                    })
            });
    }

    render() {
        return (
            <Row>
                <Col span={12}>{this.state.member.username}</Col>
                <Col span={12}><Button type="danger" onClick={this.removeUser}> Remove </Button></Col>
            </Row>
        )
    }

}