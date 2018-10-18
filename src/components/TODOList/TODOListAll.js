import React from 'react';
import {Row} from 'antd';
import TODOListCard from './TODOList';
import TODOListHttp from './../../http/TODOListHTTP';

export default class TODOListAll extends React.Component {
    
    constructor(props){
        super(props);
        this.observer = props.observer;
    }

    state = {
        list: []
    }

    createList = () => {
        let cards = [];

        for(let index in this.state.list) {
            
            let todoList = this.state.list[index];
            todoList.index = index;

            let card = <TODOListCard 
                        todoList={todoList}
                        key={index} 
                        observer={this.observer} />
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

        this.observer.subscribe('add-todo-list', (data)=>{
            let list = this.state.list;
            list.push(data);
            this.setState({list});
        });

        this.observer.subscribe('delete-todo-list', (data)=>{
            let list = this.state.list;
            list.splice(data, 1);
            this.setState({list});
        });

    }

    componentDidUpdate() {
        this.createList();
    }

    render() {
        return (
            <Row>
                {this.createList()}
            </Row>
        );
    }
}