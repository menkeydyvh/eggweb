import lockr from 'lockr'
import Cookies from 'js-cookie'

let util = {}


/**
 * html title 的设置
 * @param title
 */
util.title = function (title) {
  title = title ? title + ' - Home' : 'Home'
  window.document.title = title
}


/**
 * 获取 地址栏上的所有参数数据
 * @returns {{}}
 */
util.getLocationBarData = function () {
  let url = location.search, theRequest = {}
  if (url.indexOf("?") != -1) {
    let str = url.substr(1)
    let strs = str.split("&")
    for (let i = 0; i < strs.length; i++) {
      let item = strs[i].split("=")
      theRequest[item[0]] = decodeURIComponent(item[1])
    }
  }
  return theRequest;
}

/**
 * 生成随机字符串
 * @param len  几位
 * @returns {string}
 */
util.cookid = function (len) {
  var rdmString = ''
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2)) ;
  return rdmString.substr(0, len)
}

/**
 * data格式化
 * @param date
 * @param fmt
 * @returns {*}
 */
util.dateFormatting = function (date, fmt) {
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  var o = {
    'M+': date.getMonth() + 1,                 //月份
    'd+': date.getDate(),                    //日
    'h+': date.getHours(),                   //小时
    'm+': date.getMinutes(),                 //分
    's+': date.getSeconds(),                 //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds()             //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, ( date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, ( RegExp.$1.length == 1) ? (o[k]) : (( '00' + o[k]).substr(('' + o[k]).length)))
  return fmt
}

/**
 * 手机号验证
 * @param value
 * @returns {boolean}
 */
util.phoneValidation = function (value) {
  let zz = /^((13[0-9])|147|(15[0-35-9])|(17[0-9])|180|183|182|(18[5-9]))[0-9]{8}$/;
  value = util.trim(value);
  return zz.test(value);
}

/**
 * 邮箱验证
 * @param value
 * @returns {boolean}
 */
util.emailValidation = function (value) {
  let zz = /^[a-zA-Z0-9][a-zA-Z0-9._-]*\@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]+$/;
  value = util.trim(value);
  return zz.test(value);
}

/**
 * 本地存储处理
 * @param name
 * @param value
 */
util.lockr = function (name, value) {
  if (window.localStorage) {
    if (value && name) {
      lockr.set(name, value);
      return true;
    } else if (name) {
      return lockr.get(name);
    }
  } else {
    if (value && name) {
      Cookies.set(name, value);
      return true;
    } else if (name) {
      return Cookies.get(name);
    }
  }
}

util.deleteLockr = function (name) {
  if (window.localStorage) {
    if (name) {
      lockr.rm(name);
      return true;
    }
  } else {
    if (name) {
      Cookies.remove(name);
      return true;
    }
  }
}

/**
 * 去除前后空格
 * @param str
 * @returns {*}
 */
util.trim = function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export default util