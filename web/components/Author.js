import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';

import {Avatar, Divider} from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"/>
      </div>
      <div className="author-introduction">
        <span>程序猿一枚</span>
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account"/>
        <Avatar size={28} icon={<QqOutlined />} className="account"/>
        <Avatar size={28} icon={<WechatOutlined />} className="account"/>
      </div>
    </div>
  );

}

export default Author
