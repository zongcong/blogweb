/*
 **axios服务配置文件
 */
import axios from 'axios';
import { message, Modal } from 'antd';
import QS from 'qs';
import config from '../config';
import {History} from "../utils";

const { warning } = Modal;

// 创建实例
const service = axios.create({
  baseURL: config.BASE_API, // 使用代理
  timeout: 30000, // 请求超时时间
  method: 'post'
});

message.config({
  duration: 2,
  maxCount: 1,
});


// request拦截器
service.interceptors.request.use(
  config => {
    // removePending(config); //在一个ajax发送前执行一下取消操作
    // config.cancelToken = new cancelToken((c) => {
    //   // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    //   pending.push({
    //     u: config.url + '&' + config.method,
    //     f: c
    //   });
    // });
    let cookie = document.cookie.split('=')[1];
    config.headers.common['Authorization'] = 'Bearer ' + cookie;
    if (config.data && config.data instanceof FormData) {
      // 图片上传
      config.headers['Content-Type'] = 'multipart/form-data'
    } else if(config.method === 'get') {
      config.params = config.data;
    } else {
      config.data = QS.stringify(config.data);
    }
    // Do something before request is sent
    config.withCredentials = true;
    // let lang = window.vm.$i18n.locale
    // if (lang) config.headers['Accept-Language'] = lang.toLowerCase()
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error.response)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    // removePending(response.config); //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    return response
  },
  error => {
    if (error.message.includes('timeout')) {
      // 网络连接超时，请稍后再试
      // Message.error(window.vm.$t('latest.type2'));
    }
    return Promise.reject(error)
  }
)

// 用一个新的promise再包一层处理抛出的错误
const fetch = function (config) {
  return new Promise((resolve, reject) => {
    service(config)
      .then(response => {
        return checkStatus(response)
      })
      .then(result => {
        // 处理服务器错误
        if (result.err) {
          reject(result);
        }

        if (result.data.code === '20000') {
          let res = result.data;
          let resolves = res.code === '20000' ? res.data : res;
          resolve(resolves);
        } else {
          message.warning(result.data.desc);
          console.log(result.data.code)
          if (result.data.code === '20009') {
            window.sessionStorage.setItem('isLogin', false);
            warning({
              title: '登录信息失效警告',
              content: '登录信息已失效，请重新登录你的账号',
              onOk() {
                History.replace('/')
              },
            });
          }
          reject(result);
        }

      })
      .catch(error => {
        reject(error)
      })
  })
}

// 检查请求状态
function checkStatus (response) {
  // 如果http状态码正常，则直接返回数据
  // console.log('checkStatus', response);
  let status = response.status;
  if (response && (status === 200 || status === 304)) {
    return response
  }
  // 异常状态下，把错误信息返回去
  if (!response) {
    return {
      // 定义错误信息
      err: true,
      status: -1,
      message: '无法连接服务器，请稍后再试'
    }
  } else {
    return {
      err: true,
      status: status,
      message: `服务器返回出错，状态码：${status}`
    }
  }
}

// 超时签出
// function logout () {
//   MessageBox.confirm('您已被登出，请重新登录！', '提示', {
//     confirmButtonText: '确 定',
//     showCancelButton: false,
//     showClose: false,
//     closeOnClickModal: false,
//     type: 'warning'
//   }).then(() => {
//     window.vm.$router.push('/login');
//   });
// }

export default fetch
