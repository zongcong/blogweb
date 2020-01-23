import React from 'react';
import {Route} from 'react-router-dom';
import './style/Comm.less';
import AdminChildren from "./pages/AdminChildren";
import Login from "./pages/Login";
import {History} from "./utils";

function App({history}) {
  // 初始化路由
  History.initRouter(history);
  return (
    <>
      <Route path='/login' exact component={Login}/>
      <Route path='/index' component={AdminChildren}/>
    </>
  )
}
export default App;

