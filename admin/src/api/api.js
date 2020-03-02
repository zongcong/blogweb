import fetch from '../service/fetch'

// 获取下载链接
export const webDownload = data => {
  return fetch({
    url: '/api/version/WebDownload',
    method: 'post',
    data: data
  })
}

// 获取下载链接
export const getArticleList = data => {
  return fetch({
    url: '/api/article/getArticleList',
    method: 'get',
    data: data
  })
}

// 获取下载链接
export const addArticle = data => {
  return fetch({
    url: '/api/article/addArticle',
    method: 'post',
    data: data
  })
}

export const register = data => {
  return fetch({
    url: '/public/user/register',
    method: 'post',
    data: data
  })
}

export const publicKey = data => {
  return fetch({
    url: '/public/publicKey',
    method: 'get',
    data: data
  })
}

export const login = data => {
  return fetch({
    url: '/public/user/login',
    method: 'post',
    data: data
  })
}

export const loginOut = () => {
  return fetch({
    url: '/public/user/loginOut',
    method: 'post',
  })
}

