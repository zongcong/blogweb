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
      render: text => <a>{text}</a>,
    },
    {
      title: '类别',
      dataIndex: 'typeName',
      key: 'typeName',
    },
    {
      title: '发布时间',
      dataIndex: 'addTime',
      key: 'addTime',
    },
    {
      title: '集数',
      key: 'part_count',
      dataIndex: 'part_count',
      render: tags => (
        <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
      ),
    },
    {
      title: '浏览量',
      dataIndex: 'view_count',
      key: 'view_count'
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

  const data = [
    {
      key: '1',
      title: 'John Brown',
      typeName: 32,
      addTime: 'New York No. 1 Lake Park',
      view_count: '1',
      part_count: ['nice', 'developer'],
    },
    {
      key: '2',
      title: 'Jim Green',
      typeName: 42,
      addTime: 'London No. 1 Lake Park',
      view_count: '1',
      part_count: ['loser'],
    },
    {
      key: '3',
      title: 'Joe Black',
      typeName: 32,
      addTime: 'Sidney No. 1 Lake Park',
      view_count: '1',
      part_count: ['cool', 'teacher'],
    },
  ];
  return (
    <TableList columns={columns} data={data}></TableList>
  )
}

export default ArticleList;
