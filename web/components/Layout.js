import React from 'react'
import Head from 'next/head'
import {Row, Col} from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => {
  return (
    <div className='comm-component'>
      <Head>
        {props.head}
      </Head>
      <Header/>
      <Row className="comm-main"
           type="flex"
           justify="center">
        <Col className="comm-left"
             xs={24}
             sm={24}
             md={23}
             lg={23}
             xl={18}>
          {props.bread}
        </Col>
      </Row>
      <div className="comm-main">
        <Row type="flex"
             justify="center">
          <Col className="comm-left"
               xs={24}
               sm={24}
               md={16}
               lg={18}
               xl={14}>
              {props.children}
          </Col>
          <Col className="comm-right"
               xs={0}
               sm={0}
               md={7}
               lg={5}
               xl={4}>
            {props.right}
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
