import React from 'react';
import {Row} from 'antd';

export default class Member extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            member: props.member
        }
    }



    render() {
        return (
            <Row>
            </Row>
        )
    }

}