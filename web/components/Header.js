import React, {useState, useEffect} from 'react'
import '../public/style/components/header.css'
import Router from 'next/router'

import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons';
import { Row, Col, Menu, Affix } from 'antd';

const Header = (props) => {

  let list = [
    {key: 'home', className: '', path: '/', routerName: '首页', icon: <HomeOutlined />},
    {key: 'video', className: '', path: '/index/list', routerName: '视频', icon: <YoutubeOutlined />},
    {key: 'life', className: '', path: '/index/detailed', routerName: '生活', icon: <SmileOutlined />},
  ]

  const [routeList, setRouterList] = useState(list);

  const goToPage = (path) => {
    Router.push(path)
  }

  useEffect(() => {
    setRouterList(prevState => {
      prevState.map(item => {
        item.className = '';
        if (item.path === Router.pathname) {
          item.className = 'menu-item';
        }
      });
      return [...prevState];
    })
  }, []);


  return (
    <div>
      <Affix offsetTop={0}>
        <Row type="flex"
             className="header"
             align='middle'
             justify="center">
          <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">二哥</span>
            <span className="header-txt">个人博客</span>
          </Col>

          <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal">
              {
                routeList.map(item => (
                  <Menu.Item key={item.key}
                             className={item.className}
                             onClick={() => goToPage(item.path)}>
                    {item.icon}
                    {item.routerName}
                  </Menu.Item>
                ))
              }
            </Menu>
          </Col>
        </Row>
      </Affix>
    </div>
  );
}

export default Header
