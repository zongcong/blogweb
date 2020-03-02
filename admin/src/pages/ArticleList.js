import React,{useState, useRef} from 'react';
import { Modal, message, Tag, Button } from 'antd';
import http from '../api';
import TableList from "../components/Table";

const {confirm} = Modal;

function ArticleList(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
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
          <Button type="primary"
                  size='small'
                  className='mr15'
                  icon="form" />
          <Button type="danger"
                  size='small'
                  icon="delete" />
        </>
      ),
    },
  ];

  const getList = (page = 1, pageSize = 10) => {
    let data = {
      page,
      pageSize
    };
    http.getArticleList(data)
      .then(res => {
        console.log(res)
        setList(res.data);
        setLoading(false);
        setTotal(res.total);
      })
      .catch(err => {
        setLoading(false);
      })
  }

  const onChange = (pagination) => {
    getList(pagination.current);
  };

  useState(() => {
    getList();
  }, []);


  return (
    <TableList columns={columns}
               loading={loading}
               total={total}
               onChange={onChange}
               data={list}></TableList>
  )
}

export default ArticleList;
