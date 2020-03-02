import React, {useState} from 'react'
import {Affix, Icon, Breadcrumb} from 'antd'

import Author from '../../components/Author'
import Advert from '../../components/Advert'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import '../../public/style/pages/detailed.css'
import Tocify from '../../components/tocify.tsx'
import Layout from "../../components/Layout";

const Detailed = (props) => {
  let markdown = '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```';

  const renderer = new marked.Renderer();

  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  const html = marked(markdown);

  return (
    <Layout head={<><title>博客详细页</title><link rel="icon" href="/favicon.ico"/></>}
            bread={<Breadcrumb className='bread-div'>
                    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                    <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                  </Breadcrumb>}
            right={<>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={58}>
                    <div className="detailed-nav comm-box">
                      <div className="nav-title">文章目录</div>
                      {tocify && tocify.render()}
                    </div>
                  </Affix></>}>
      <>
        <div className="detailed-title">
          React实战视频教程-技术胖Blog开发(更新08集)
        </div>

        <div className="list-icon center">
          <span><Icon type="calendar"/> 2019-06-28</span>
          <span><Icon type="folder"/> 视频教程</span>
          <span><Icon type="fire"/> 5498人</span>
        </div>

        <div className="detailed-content"
             dangerouslySetInnerHTML={{__html: html}}>
        </div>
      </>
      />
    </Layout>
  )
}

export default Detailed
