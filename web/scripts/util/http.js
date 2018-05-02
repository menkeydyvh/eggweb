import util from './index'
import axios from 'axios'
import Qs from 'qs'

const apiMethods = {
  methods: {
    apiGet(url, data) {
      let self = this;
      return new Promise((resolve, reject) => {
        if (url.indexOf('?') > -1) {
          url = url + '&' + Qs.stringify(data)
        } else {
          url = url + '?' + Qs.stringify(data)
        }
        axios.get(url).then((response) => {
          if (response.data.errors) {
            if (self.handleErrorCode(response.data.errors[0].code)) {
              self.handleErrorJson(response.data)
            }
          }
          resolve(response.data)
        }, (response) => {
          if (self.handleErrorCode(response.response.status)) {
            let j = self.handleErrorJson(response.response.data);
            if (!j) {
              bus.$Message.error('请求超时，请检查网络')
            }
          }
        })
      })
    },
    apiPost(url, data) {
      let self = this;
      return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(data)).then((response) => {
          if (response.data.errors) {
            if (self.handleErrorCode(response.data.errors[0].code)) {
              self.handleErrorJson(response.data)
            }
          }
          resolve(response.data)
        }).catch((response) => {
          if (self.handleErrorCode(response.response.status)) {
            let j = self.handleErrorJson(response.response.data);
            if (!j) {
              bus.$Message.error('请求超时，请检查网络')
            }
          }
        })
      })
    },
    apiGraphQL(query, variables = {}) {
      let self = this;
      return new Promise((resolve, reject) => {
        let uid = util.lockr('uid'), token = uid ? (uid ? uid : '') : '';
        axios.post('graphql/index?access_token=' + token, {
          query: query,
          variables: variables
        }).then((response) => {
          if (response.data.errors) {
            if (self.handleErrorCode(response.data.errors[0].code)) {
              self.handleErrorJson(response.data)
            }
          }
          resolve(response.data.data)
        }).catch((response) => {
          if (self.handleErrorCode(response.response.status)) {
            let j = self.handleErrorJson(response.response.data);
            if (!j) {
              bus.$Message.error('请求超时，请检查网络')
            }
          }
        })
      })
    },
    handleErrorJson(json) {
      //处理异常json
      if (typeof json == 'string') {
        try {
          json = JSON.parse(json)
        } catch (e) {
          return null
        }
      }
      if (json.message) {
        bus.$Message.error(json.message);
      }
      for (var i in json.errors) {
        bus.$Message.error(json.errors[i].message);
      }
      return json;
    },
    handleErrorCode(code) {
      // 异常code处理
      let isTrue = true;
      switch (code) {
        case 401:
          isTrue = false;
          location.href = process.env.PUBLIC_PATH + '/login/index';
          break;
        case 403:
          bus.$Message.error('当前用户没有权限');
          isTrue = false;
          break;
        default :
          break;
      }
      return isTrue;
    },
  }
}

export default apiMethods
