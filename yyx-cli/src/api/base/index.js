import { post, get } from '../xhr'

export default{
  getA(data){
    const url = '/common/get_config'
    const params = data
    return get(url,params)
  },
  getB(data){
    const url = '/account/get_info'
    const params = data
    return post(url,params,true)
  },
}