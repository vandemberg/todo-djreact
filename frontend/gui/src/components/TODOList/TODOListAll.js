import React from 'react';
import {Row} from 'antd';
import TODOListCard from './TODOList';
import TODOListHttp from './../../http/TODOListHTTP';

export default class TODOListAll extends React.Component {

    state = {
        list: []
    }

    createList = () => {
        let cards = [];

        for(let index in this.state.list) {
            let card = <TODOListCard 
                        content={this.state.list[index]}
                        />
            cards.push(card);
        }

        if(cards.length === 0) {
            return <center> Empty TODO List</center>;
        }

        return cards;
    }

    componentDidMount() {
        TODOListHttp.list()
            .then(result => {
                this.setState({list: result.data});
            }).catch(error => console.log(error));
    }

    render() {
        return (
            <Row>
                {this.createList()}
            </Row>
        );
    }
}