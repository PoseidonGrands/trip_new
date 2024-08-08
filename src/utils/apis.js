const apiHost = 'http://localhost:5173/api'
/**
 * 账户相关的接口
 */
const AccountApis = {
  regUrl: apiHost + '/accounts/reg',
  loginUrl: apiHost + '/accounts/login',
  logoutUrl: apiHost + '/accounts/logout',
  getInfoUrl: apiHost + '/accounts/info'
}

const SystemApis = {
  bannerListUrl: apiHost + '/system/slider_list'
}

const SightApis = {
  sightListUrl: apiHost + '/sight/list',
  sightDetailUrl: apiHost + '/sight/detail',
  sightInfoUrl: apiHost + '/sight/info',
  sightTicketUrl: apiHost + '/sight/tickets',
  sightCommentUrl: apiHost + '/sight/comment'
}

export { AccountApis, SystemApis, SightApis }
