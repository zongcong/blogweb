import React, {useState} from 'react';
import {Card, Input, Icon, Button, Spin} from 'antd';
import { withRouter } from 'react-router-dom';
import http from '../api';
import {History} from "../utils";
import {JSA} from '../config'
import '../style/Login.less';

function Login(props) {
  const [phone, setPhone] = useState('13189554460');
  const [password, setPassword] = useState('123456');
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = () => {
    setIsLoading(true);
    let data = {
      phone,
      password: JSA(password, key)
    }
    http.login(data)
      .then(res => {
        setIsLoading(false);
        window.sessionStorage.setItem('isLogin', true);
        History.replace('/index');
      })
      .catch(err => {
        setIsLoading(false);
      })
  }

  useState(() => {
    http.publicKey()
      .then(res => {
        console.log(res)
        setKey(res.key);
      })
  }, []);


  return (
    <div className='login flex flex-center'>
      <Spin tip='loading...'
            spinning={isLoading}>
        <Card title='TZC Blog'
              bordered={true}
              className='card-box bd-rs4'
              style={{width: '400px'}}>
          <Input id='userName'
                 className='login-input'
                 size='large'
                 placeholder='请输入你的用户名'
                 defaultValue={phone}
                 onChange={(e) => {setPhone(e.target.value)}}
                 prefix={<Icon type='user' style={{color: 'rgba(0, 0, 0, .25)'}}></Icon>} />
          <Input.Password
                 id='password'
                 size='large'
                 className='login-input'
                 placeholder='请输入你的密码'
                 defaultValue={password}
                 onChange={(e) => {setPassword(e.target.value)}}
                 prefix={<Icon type='key' style={{color: 'rgba(0, 0, 0, .25)'}}></Icon>} />
          <Button type='primary'
                  size='large'
                  block
                  disabled={!phone || !password}
                  onClick={checkLogin}>登录</Button>
        </Card>
      </Spin>
    </div>
  );
}

export default withRouter(Login);
