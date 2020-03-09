import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addNewUserToDatabase } from '../../actions';

const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 50px auto;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmitSignUp = values => {
    dispatch(addNewUserToDatabase(values));
  };

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };

  return (
    <StyledForm {...layout} name="nest-messages" onFinish={handleSubmitSignUp}>
      <Form.Item
        name={['name']}
        label="Name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['lastname']}
        label="Last Name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['username']}
        label="Username"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['password']}
        label="Password"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name={['birthdate']}
        label="Birth date"
        rules={[
          {
            required: true
          }
        ]}
      >
        <StyledDatePicker />
      </Form.Item>
      <Form.Item name={['about']} label="About">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <span>Already have an account? </span>
        <Link to="/signin">Sign in!</Link>
      </Form.Item>
    </StyledForm>
  );
};

export default SignUpForm;
