import React from 'react';
import { Card, Row } from 'antd';

const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

export default class Task extends React.Component {
    
    constructor(props){
        super(props);
        this.observer = props.observer;
    }

    render() {
        return (
            <Row style={{marginTop: '10px'}}>
                <Card.Grid style={gridStyle}>{this.props.task.title}</Card.Grid>
            </Row>
        );
    }
}