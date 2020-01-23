import React, {useState, useRef} from 'react';
import {Table, Divider, Tag, Modal, message, Button} from 'antd';

import './index.css';
const {confirm} = Modal;

function TableList(props) {
  const {columns, data} = props;
  const [list, setList] = useState([]);

  return (
    <div className="table-box bg bd-rs4">
      <Table columns={columns} dataSource={data}/>
    </div>
  )
}

export default TableList;
