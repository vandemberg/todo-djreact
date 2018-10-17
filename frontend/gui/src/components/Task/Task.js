import React from 'react';
import { Card, Row } from 'antd';
import Modal from 'react-modal';
import TaskDetails from './TaskDetails';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#task-details")
  
const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

export default class Task extends React.Component {
    
    constructor(props){
        super(props);
        this.observer = props.observer;
        
        this.state = {
            modalIsOpen: false
        };
      
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <Row onClick={this.openModal} style={{marginTop: '10px'}}>
                    <Card.Grid style={gridStyle}>{this.props.task.title}</Card.Grid>
                </Row>
                <Modal
                    id="task-details"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Task Details"
                    >
                    <TaskDetails task={this.props.task} observer={this.observer} />
                </Modal>
            </div>
        );
    }
}