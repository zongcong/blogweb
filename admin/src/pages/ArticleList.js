import React,{useState, useRef} from 'react';
import { Modal, message, Tag, Button } from 'antd';
import http from '../api';
import TableList from "../components/Table";

const {confirm} = Modal;

function ArticleList(props) {
  const [list, setList] = useState([]);
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: text => <span>{text}</span>,
    },
    {
      title: '类别',
      dataIndex: 'articleType',
      key: 'articleType',
      render: text => <span>{text}</span>,
    },
    {
      title: '发布时间',
      dataIndex: 'releaseTime',
      key: 'releaseTime',
    },
    {
      title: '集数',
      key: 'part_count',
      dataIndex: 'part_count',
      // render: tags => (
      //   <span>
      //   {tags ? tags.map(tag => {
      //     let color = tag.length > 5 ? 'geekblue' : 'green';
      //     if (tag === 'loser') {
      //       color = 'volcano';
      //     }
      //     return (
      //       <Tag color={color} key={tag}>
      //         {tag.toUpperCase()}
      //       </Tag>
      //     );
      //   }) : ''}
      // </span>
      // ),
    },
    {
      title: '浏览量',
      dataIndex: 'view_count',
      key: 'view_count',
      render: text => <span>{text}</span>,
    },
    {
      title: '状态',
      dataIndex: 'releaseType',
      key: 'releaseType',
      render: text => <span>{text === '1' ? '已发布' : '草稿'}</span>,
    },
    {
      title: '操作',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button type='primary'>修改</Button>
          <Button>删除</Button>
        </>
      ),
    },
  ];

  const getList = () => {
    http.getArticleList()
      .then(res => {
        console.log(res)
        setList(res);
      })
  }

  useState(() => {
    getList();
  }, []);


  return (
    <TableList columns={columns} data={list}></TableList>
  )
}

export default ArticleList;
