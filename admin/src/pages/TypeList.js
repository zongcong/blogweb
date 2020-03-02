import React, {useState, useRef} from 'react';
import TableList from '../components/Table';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { Divider, Button, Tag} from 'antd';

function TypeList(props) {
  const columns = [
    {
      title: '类型',
      dataIndex: 'typeName',
      key: 'typeName',
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
      typeName: 'John Brown',
      addTime: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      typeName: 'Jim Green',
      addTime: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      typeName: 'Joe Black',
      addTime: 'Sidney No. 1 Lake Park',
    },
  ];
  return (
    <TableList columns={columns} data={data}></TableList>
  )
}

export default TypeList;
