import React,{useState, useRef} from 'react';
import '../style/AddArticle.less';
import http from '../api';
import { Row, Col, Input, Select, Button, DatePicker } from 'antd';
import MarkdownEditor from "../components/MarkdownEditor/Index";

const { Option } = Select;
const { TextArea } = Input;

function AddArticle(props) {

  const [articleId,setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle,setArticleTitle] = useState('');   //文章标题
  const [articleContent , setArticleContent] = useState('');  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容'); //html内容
  const [introducemd,setIntroducemd] = useState();            //简介的markdown内容
  const [introducehtml,setIntroducehtml] = useState('等待编辑'); //简介的html内容
  const [showDate,setShowDate] = useState();   //发布日期
  const [updateDate,setUpdateDate] = useState(); //修改日志的日期
  const [typeInfo ,setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType,setSelectType] = useState(1); //选择的文章类别
  const editor = useRef();

  const click = () => {
    // console.log(editor.current)
    // editor.current.setValue('## 21212');
    // console.log(editor.current.getValue());
    // editor.current.setHtml('<span>121212</span>');
    // console.log(editor.current.getHtml());
    getArticleList();
  }

  const getArticleList = () => {
    http.publicKey()
      .then(res => {
        console.log(res)
      })
    http.getArticleList()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='add-article'>
      <Row getter={24}>
        <Col span={24}
             className='bg tr bd-rs4 mb20'>
          <Button className='mr15'>暂存文章</Button>
          <Button type="primary">发布文章</Button>
          <br/>
        </Col>
      </Row>
      <div className='bg bd-rs4'>
        <Row gutter={24}>
          <Col span={16}>
            <Row gutter={10}
                 className='mb15'>
              <Col span={12}>
                <Input placeholder="博客标题" />
              </Col>
              <Col span={4}>
                <Select defaultValue="Sign Up">
                  <Option value="Sign Up">视频教程</Option>
                </Select>
              </Col>
            </Row>

            <Row gutter={10}>
              <Col span={24}
                   className='mb15'>
                <div className="date-select">
                  <DatePicker placeholder="发布日期"/>
                </div>
              </Col>
              <Col span={12}
                   className='mb15'>
                <TextArea rows={4}
                          placeholder="文章简介"/>
                <div className="introduce-html"></div>
              </Col>
            </Row>

            <Row gutter={10} >
              <Col span={24}>
                <MarkdownEditor ref={editor} height='500px'></MarkdownEditor>
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
