import React from 'react';
import {Row} from 'antd';
import TODOListCard from './TODOList';
import axios from 'axios';

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
        axios.get("http://127.0.0.1:8000/api/todo-list/")
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