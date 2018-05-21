
const userInfoService = require('./../services/user-info')
const userCode = require('./../codes/user')

module.exports = {

  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
  async signIn(ctx) {

    let formData = ctx.request.body

    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    /* let userResult = await userInfoService.signIn(formData)

    if (userResult) {
      if (formData.userName === userResult.name) {
        result.success = true
      } else {
        result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
        result.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
      }
    } else {
      result.code = 'FAIL_USER_NO_EXIST',
        result.message = userCode.FAIL_USER_NO_EXIST
    }

    if (formData.source === 'form' && result.success === true) {
      let session = ctx.session
      session.isLogin = true
      session.userName = userResult.name
      session.userId = userResult.id

      ctx.redirect('/work')
    } else {
      ctx.body = result
    } */

    ctx.body = result
  },

  /**
   * 获取用户信息
   * @param    {obejct} ctx 上下文对象
   */
  async getLoginUserInfo(ctx) {
    console.log('userinfo', ctx);

    let session = 10 //ctx.session
    let isLogin = 10 //session.isLogin
    let userName = 10 //session.userName

    console.log('session=', session)

    let result = {
      success: false,
      message: '',
      data: null,
    }

    if (isLogin === true && userName) {
      let userInfo = await userInfoService.getUserInfoByUserName(userName)
      if (userInfo) {
        result.data = userInfo
        result.success = true
      } else {
        result.message = userCode.FAIL_USER_NO_LOGIN
      }
    } else {
      // TODO
    }

    ctx.body = result
  },
}