import {JSEncrypt} from 'jsencrypt';
export const JSA = (str, key) => {
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);
  return encrypt.encrypt(str);
}
export default {
  BASE_API: '/FEApi'
}

export function redirect () {
  if (process.env.NODE_ENV !== 'development') {
    let origin = window.location.origin
    let reg = /Android|webOS|iPhone|iPod|BlackBerry/i
    if (reg.test(navigator.userAgent) && origin) {
      window.location.href = origin + '/download'
    }
  }
}
