import React from 'react';
import {Table,Modal} from 'antd';

import './index.css';
const {confirm} = Modal;

function TableList(props) {
  const {columns, data} = props;

  return (
    <div className="table-box bg bd-rs4">
      <Table columns={columns} dataSource={data}/>
    </div>
  )
}

export default TableList;
