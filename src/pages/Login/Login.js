import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import { post } from '../../utils/request';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
const FormItem = Form.Item;
 class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post('http://localhost:3000/login', values)
          .then((res) => {
            console.log(res);
            if (res) {
              message.info('登录成功');
              this.props.history.push('/');
            } else {

              message.info('登录失败，账号或密码错误');
            }
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{padding:'100px',textAlign:'center'}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      </div>
    );
  }



}

export default Form.create()(Login);
