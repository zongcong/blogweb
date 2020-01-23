import React from 'react';
import {Route} from 'react-router-dom';
import AdminIndex from '../pages/AdminIndex';
import AddArticle from "../pages/AddArticle";
import ArticleList from "../pages/ArticleList";
import TypeList from "./TypeList";
import TagList from "./TagsList";
import MessageList from "./MessageList";

function AdminChildren() {
  // 初始化路由
  return (
    <AdminIndex>
      <Route path="/index" exact component={AddArticle} />
      <Route path="/index/add" component={AddArticle} />
      <Route path="/index/add/:id" component={AddArticle} />
      <Route path="/index/list" component={ArticleList} />
      <Route path="/index/type" component={TypeList} />
      <Route path="/index/tags" component={TagList} />
      <Route path="/index/message" component={MessageList} />
    </AdminIndex>
  )
}

export default AdminChildren;
