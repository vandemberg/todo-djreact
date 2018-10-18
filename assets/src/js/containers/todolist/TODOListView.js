import React from 'react';
import { Row } from 'antd';
import TODOForm from '../../components/TODOList/TODOListForm';
import TODOALL from '../../components/TODOList/TODOListAll';
import ReactObserver from 'react-event-observer';


export default class TODOList extends React.Component {
    
    constructor(props){
        super(props);
        this.observer = ReactObserver();
    }

    render() {
        return (
            <div>
                <Row>
                    <TODOForm observer={this.observer} />
                </Row>
                <Row>
                    <TODOALL observer={this.observer} />
                </Row>
            </div>
        )
    }
}