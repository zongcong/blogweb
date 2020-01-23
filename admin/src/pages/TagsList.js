import React, {useState, useRef} from 'react';
import TableList from '../components/Table';
import { Divider, Button, Tag} from 'antd';

function TagsList(props) {
  const columns = [
    {
      title: '标签名称',
      dataIndex: 'tagName',
      key: 'tagName',
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
      title: '添加时间',
      dataIndex: 'addTime',
      key: 'addTime',
    },
    {
      title: '操作',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button type="primary" className='mr15' icon="form" />
          <Button type="danger" icon="delete" />
        </>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      tagName: 'John Brown',
      addTime: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      tagName: 'Jim Green',
      addTime: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      tagName: 'Joe Black',
      addTime: 'Sidney No. 1 Lake Park',
    },
  ];
  return (
    <TableList columns={columns} data={data}></TableList>
  )
}

export default TagsList;
