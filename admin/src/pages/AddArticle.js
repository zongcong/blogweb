import React,{useState, useRef} from 'react';
import '../style/AddArticle.less';
import http from '../api';
import { Row, Col, Input, Select, Button, DatePicker } from 'antd';
import MarkdownEditor from "../components/MarkdownEditor/Index";

const { Option } = Select;
const { TextArea } = Input;

function AddArticle(props) {

  // const [articleId,setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [title, setArticleTitle] = useState('');   // 文章标题
  const [introducemd, setIntroducemd] = useState(); // 简介的markdown内容
  const [releaseTime, seRtreleaseTime] = useState();   // 发布日期
  // const [updateDate, setUpdateDate] = useState(); // 修改日志的日期
  const [articleType, setSelectType] = useState(1); //选择的文章类别
  const editor = useRef();

  const click = () => {
    // console.log(editor.current)
    // editor.current.setValue('## 21212');
    // console.log(editor.current.getValue());
    // editor.current.setHtml('<span>121212</span>');
    console.log(editor.current.getHtml());
  }

  const addArticle = (releaseType) => {
    let data = {
       title,
       content: editor.current.getHtml(),
       introducemd,
       releaseTime,
       articleType,
       releaseType,
     }
     console.log(data)
     http.addArticle(data)
       .then(res => {
         console.log(res)
       });
  }

  return (
    <div className='add-article'>
      <Row getter={24}>
        <Col span={24}
             className='bg tr bd-rs4 mb20'>
          <Button className='mr15' onClick={() => addArticle('0')}>暂存文章</Button>
          <Button type="primary" onClick={() => addArticle('1')}>发布文章</Button>
          <br/>
        </Col>
      </Row>
      <div className='bg bd-rs4'>
        <Row gutter={24}>
          <Col span={16}>
            <Row gutter={10}
                 className='mb15'>
              <Col span={12}>
                <Input placeholder="博客标题"
                       onChange={(e) => {setArticleTitle(e.target.value)}}/>
              </Col>
              <Col span={4}>
                <Select defaultValue="1"
                        onChange={setSelectType}>
                  <Option value="1">视频教程</Option>
                </Select>
              </Col>
            </Row>

            <Row gutter={10}>
              <Col span={24}
                   className='mb15'>
                <div className="date-select">
                  <DatePicker placeholder="发布日期"
                              onChange={(date, str) => {seRtreleaseTime(str)}}/>
                </div>
              </Col>
              <Col span={12}
                   className='mb15'>
                <TextArea rows={4}
                          onChange={(e) => {setIntroducemd(e.target.value)}}
                          placeholder="文章简介"/>
                <div className="introduce-html"></div>
              </Col>
            </Row>

            <Row gutter={10} >
              <Col span={24}>
                <MarkdownEditor key={'editor'}
                                ref={editor}
                                height='500px'></MarkdownEditor>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
      <Button onClick={click}>点击</Button>
    </div>
  )
}

export default AddArticle;
