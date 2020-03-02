import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import { Modal } from 'antd';
import './style/Comm.less';
import AdminChildren from "./pages/AdminChildren";
import Login from "./pages/Login";
import {History} from "./utils";

const { warning } = Modal;

function App({history}) {
  // 初始化路由
  History.initRouter(history);
  useState(() => {
    // 通过输入浏览器地址来跳转，需要判断是否已登录
    let isLogin = window.sessionStorage.getItem('isLogin');
    if(isLogin === 'false' || !isLogin) {
      History.replace('/');
    }
    History.listen(route => {
      // 正常路由跳转，需要判断是否已登录
      let isLogin = window.sessionStorage.getItem('isLogin');
      if((isLogin === 'false' || !isLogin) && route.pathname !== '/') {
        warning({
          title: '登录信息失效警告',
          content: '登录信息已失效，请重新登录你的账号',
          onOk() {
            History.replace('/')
          },
        });
        }
    });
  }, []);

  return (
    <>
      <Route path='/' exact component={Login}/>
      <Route path='/index' component={AdminChildren}/>
    </>
  )
}
export default App;

