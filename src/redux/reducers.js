
import {combineReducers} from 'redux'

import {
    RECEIVE_HEADER,
    RECEIVE_FOCUSLIST,
    RECEIVE_TAGLIST,
    RECEIVE_NEWITEMLISTS,
    RECEIVE_EWITEMLISTS2,
    RECEIVE_REQFLASHSALEINDEXVO,
    RECEIVE_REQTOPICLISTS,
    RECEIVE_TOPICLISTS,
    RECEIVE_CATEGORYS,
    RECEIVE_BANNERS,
    RECEIVE_COLUMN,
    RECEIVE_RECOMMEND,
    RECEIVE_TENFIFTEEN,
    RECEIVE_GETFINDMORE,
    RECEIVE_YZM
} from './action-types'

const homePage = {
        headerNav:[],//头部列表
        focusList:[],  //首页活动列表
        tagList:[],  //首页品牌列表
        newitemlists:[], //新品首发,
        newitemlists2:[], //人气推荐
        flashSaleIndexVO:[],//限时购
        topicLists: [], //专题精选
        cateLists: [],    //居家及以下所有
        categorys: [] ,   //分类页数据
        banners: [],    //识物banner
        columns: [],   //banner下面的channel
        recommend: {},   //为你推荐
        tenfifteen:[], //十点一刻
        findMores: [],    //更多精选
        yzmNow:"" , //验证码
 }

function headerContent(state=homePage, action) {
  switch (action.type) {
      case RECEIVE_HEADER:
       return {...state,headerNav:action.data}
      case RECEIVE_FOCUSLIST:
       return {...state,focusList:action.data}
      case RECEIVE_TAGLIST:
          return {...state,tagList:action.data}
      case RECEIVE_NEWITEMLISTS:
          return {...state,newitemlists:action.data}
      case RECEIVE_EWITEMLISTS2:
          return {...state,newitemlists2:action.data}
      case RECEIVE_REQFLASHSALEINDEXVO:
          return {...state,flashSaleIndexVO:action.data}
      case RECEIVE_REQTOPICLISTS:
          return {...state,topicLists:action.data}
      case RECEIVE_TOPICLISTS:
          return {...state,cateLists:action.data}
      case RECEIVE_CATEGORYS:
          return {...state,categorys:action.data}
      case RECEIVE_BANNERS:
          return {...state,banners:action.data}
      case RECEIVE_COLUMN:
          return {...state,columns:action.data}
      case RECEIVE_RECOMMEND:
          return {...state,recommend:action.data}
      case RECEIVE_TENFIFTEEN:
          return {...state,tenfifteen:action.data}
      case RECEIVE_GETFINDMORE:
          return {...state,findMores:action.data}
      case RECEIVE_YZM:
          return {...state,yzmNow:action.data}
      default:
      return state
  }
}








export default combineReducers({
    headerContent

})


