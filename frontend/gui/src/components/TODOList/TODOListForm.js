import React from 'react';
import { Form, Select, Input, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("-- hello world --");
  }

  handleSelectChange = (value) => {
    console.log(value);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
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