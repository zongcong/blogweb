import React,{useState, useEffect} from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button, message, Modal } from 'antd';
import '../style/AdminIndex.less';
import {History} from "../utils";
import http from '../api';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { confirm } = Modal;



function AdminIndex(props){
  const [collapsed, setCollapsed] = useState(false);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(['1']);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const openSubMenu = (key) => {
    setDefaultOpenKeys(key);
  }

  useEffect(() => {
    let path = History.location().pathname;
    if(['/index/list', '/index/add'].includes(path)) {
      setDefaultOpenKeys(['sub1']);
    }
    switch (path) {
      case '/index/list':
        setDefaultSelectedKeys(['articleList']);
        break;
      case '/index/add':
        setDefaultSelectedKeys(['1']);
        break;
      case '/index/type':
        setDefaultSelectedKeys(['type']);
        break;
      case '/index/tag':
        setDefaultSelectedKeys(['tag']);
        break;
      case '/index/message':
        setDefaultSelectedKeys(['message']);
        break
    }
  }, []);

  const handleClickArticle = e => {
    switch (e.key) {
      case '1':
        setDefaultSelectedKeys(['1']);
        History.push('/index/add');
        break;
      case 'addArticle':
        setDefaultSelectedKeys(['addArticle']);
        History.push('/index/add');
        break;
      case 'articleList':
        setDefaultSelectedKeys(['articleList']);
        History.push('/index/list');
        break;
      case 'type':
        setDefaultSelectedKeys(['type']);
        History.push('/index/type');
        break;
      case 'tag':
        setDefaultSelectedKeys(['tag']);
        History.push('/index/tags');
        break;
      case 'message':
        setDefaultSelectedKeys(['message']);
        History.push('/index/message');
        break;

    }
  }

  const loginOut = () => {
    confirm({
      title: '是否退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        http.loginOut()
          .then(res => {
            console.log(res)
            window.sessionStorage.setItem('isLogin', false);
            message.success('退出成功');
            History.replace('/');
          });
      },
    });
  }

  return (
    <Layout className='min-height'>
      <Sider collapsible
             className='sider-box'
             collapsed={collapsed}
             onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark"
              onClick={handleClickArticle}
              onOpenChange={openSubMenu}
              openKeys={defaultOpenKeys}
              selectedKeys={defaultSelectedKeys}
              mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>
          <SubMenu key="sub1"
                   title={
                     <span>
                       <Icon type="desktop" />
                       <span>文章管理</span>
                     </span>}>
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>

          <Menu.Item key="type">
            <Icon type="bulb" />
            <span>类型管理</span>
          </Menu.Item>
          <Menu.Item key="tag">
            <Icon type="tags" />
            <span>标签管理</span>
          </Menu.Item>
          <Menu.Item key="message">
            <Icon type="message" />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='layout'
              style={{marginLeft: collapsed ? 80 : 200}}>
        <Header className='header tr'
                style={{left: collapsed ? 80 : 200, paddingRight: collapsed ? 80 : 200}}>
          <Button type="primary"
                  className='mr15'
                  onClick={loginOut}
                  icon="logout" />
        </Header>
        <Content className='content'>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div className='router'>
            {props.children}
          </div>
        </Content>
        <Footer className='tc'>tzc.com</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminIndex;
