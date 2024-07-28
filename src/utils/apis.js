const apiHost = 'http://localhost:5173/api'
/**
 * 账户相关的接口
 */
const AccountApis = {
  loginUrl: '',
  logoutUrl: ''
}

const SystemApis = {
  bannerListUrl: apiHost + '/system/slider_list'
}

const SightApis = {
  sightListUrl: apiHost + '/sight/list'
}

export { AccountApis, SystemApis, SightApis }
