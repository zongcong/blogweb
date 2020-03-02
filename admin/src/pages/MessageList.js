import React, {useState, useRef} from 'react';
import TableList from '../components/Table';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { Divider, Button, Tag} from 'antd';

function MessageList(props) {
  const columns = [
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      render: (tags, row, index) => {
        let color = index % 2 ? 'geekblue' : 'green';
        if (tags === 'loser') {
          color = 'volcano';
        }
        return (
          <Tag color={color}>
            {tags}
          </Tag>
        )
      }
    },
    {
      title: '留言时间',
      dataIndex: 'addTime',
      key: 'addTime',
    },
    {
      title: '操作',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button type="primary"
                  size='small'
                  className='mr15'
                  icon={<FormOutlined />} />
          <Button type="danger"
                  size='small'
                  icon={<DeleteOutlined />} />
        </>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      content: 'John Brown',
      addTime: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      content: 'Jim Green',
      addTime: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      content: 'Joe Black',
      addTime: 'Sidney No. 1 Lake Park',
    },
  ];
  return (
    <TableList columns={columns} data={data}></TableList>
  )
}

export default MessageList;
