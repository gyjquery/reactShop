/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */
import axios from 'axios'
const baseUrl = ''
// const baseUrl = 'http://localhost:4000'
export default function ajax(url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    let promise
    // 执行异步ajax请求的代码
    url = baseUrl + url
    if(type==='GET') { // 发送GET请求
      // 拼请求参数串
      // data: {username: tom, password: 123}
      // paramStr: username=tom&password=123
      let paramStr = ''
      Object.keys(data).forEach(key => {
        paramStr += key + '=' + data[key] + '&'
      })
      if(paramStr) {
        paramStr =  '?' + paramStr.substring(0, paramStr.length-1)
      }
      // 使用axios发get请求
      promise = axios.get(url + paramStr)
    } else {// 发送POST请求
      // 使用axios发post请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      // 成功了, 调用 resolve
      resolve(response.data)
    }).catch(error => {
      // 失败了, 调用 reject
      reject(error)
    })
  })
}
/*
const response = await ajax('/xxx')
const result = response.data
*/
/*
ajax('/xxx').then(result => {})
const result = await ajax('/xxx')
*/
