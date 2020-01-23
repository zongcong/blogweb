import React, {useState} from 'react';
import {Card, Input, Icon, Button, Spin} from 'antd';
import '../style/Login.less';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className='login flex flex-center'>
      <Spin tip='loading...'
            spinning={isLoading}>
        <Card title='tzc blog'
              bordered={true}
              className='card-box'
              style={{width: '400px'}}>
          <Input id='userName'
                 className='login-input'
                 size='large'
                 placeholder='请输入你的用户名'
                 onChange={(e) => {setUserName(e.target.value)}}
                 prefix={<Icon type='user' style={{color: 'rgba(0, 0, 0, .25)'}}></Icon>} />
          <Input.Password
                 id='password'
                 size='large'
                 className='login-input'
                 placeholder='请输入你的密码'
                 onChange={(e) => {setPassword(e.target.value)}}
                 prefix={<Icon type='key' style={{color: 'rgba(0, 0, 0, .25)'}}></Icon>} />
          <Button type='primary'
                  size='large'
                  block
                  onClick={checkLogin}>登录</Button>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;
