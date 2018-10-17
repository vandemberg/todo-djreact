import React from 'react';
import { Row, Col } from 'antd';
import TODOForm from '../../components/TODOList/TODOListForm';
import TODOALL from '../../components/TODOList/TODOListAll';

export default class TODOList extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <TODOForm />
                </Row>
                <Row>
                    <TODOALL />
                </Row>
            </div>
        )
    }
}