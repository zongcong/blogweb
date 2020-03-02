import React from 'react';
import {Table, Modal} from 'antd';

import './index.css';
const {confirm} = Modal;

function TableList(props) {
  const {columns, data, loading, total, onChange, pagination, rowKey} = props;
  const paginations = Object.assign({}, {
    total,
    pageSize: 10,
    defaultCurrent: 1,
  }, pagination);
  return (
    <div className="table-box bg bd-rs4">
      <Table columns={columns}
             onChange={onChange}
             rowKey={record => record[rowKey || '_id']}
             pagination={paginations}
             loading={loading}
             dataSource={data}/>
    </div>
  )
}

export default TableList;
