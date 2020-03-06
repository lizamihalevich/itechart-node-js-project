import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../actions';

const StyledForm = styled(Form)`
  max-width: 300px;
  margin: 50px auto;
`;

const StyledLink = styled.a`
  float: right;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(setAuthData(values));
  };

  return (
    <StyledForm
      name="normal_login"
      className="login-form"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item name="remember">
        <Checkbox>Remember me</Checkbox>
        <StyledLink href="">Forgot password</StyledLink>
      </Form.Item>

      <Form.Item>
        <StyledButton
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          <Link to="/my-profile">Sign in</Link>
        </StyledButton>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </StyledForm>
  );
};

export default SignInForm;
