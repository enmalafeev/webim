export default {
  login(appId, perms) {
    return new Promise((resolve, reject) => {
      VK.init({ apiId: appId });
      VK.Auth.login(response => {
        if (response.session) {
          resolve(response);
        } else {
          reject(new Error('Не удалось авторизоваться!'));
        }
      }, perms);
    })
  },
  callApi(method, params) {
    params.v = params.v || '5.78';

    return new Promise((resolve, reject) => {
      VK.api(method, params, response => {
        if (response.error) {
          reject(new Error(response.error.error_msg));
        } else {
          resolve(response.response);
        }
      });
    });

  },
  setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  },
  getUser(params = {}) {
    return this.callApi('users.get', params)
  },
  getFriends(params = {}) {
    return this.callApi('friends.get', params)
  }
}