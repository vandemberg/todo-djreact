import React from 'react';
import { Form, Input, Button } from 'antd';
import TODOListHttp from '../../http/TODOListHTTP';

const FormItem = Form.Item;

class CustomForm extends React.Component {
  
  constructor(props){
    super(props);
    this.observer = props.observer;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      let data = {title: values.title};
      TODOListHttp.create(data)
        .then(result => {
          this.observer.publish('add-todo-list', result.data );
        })
        .catch(error => console.log(error));
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
  }

  render() {
    
    const {getFieldDecorator} = this.props.form;

    return (
        
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Title"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your Title!' }],
          })(
            <Input type="text" />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            To Create
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(CustomForm)