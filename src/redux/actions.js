/*
包含n个action creator
异步action
同步action
 */

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
import {
    reqHeadCateList,
    reqFocusList,
    reqTagList,
    reqnewitemlists,
    reqnewitemlists2,
    reqflashSaleIndexVO,
    reqtopicLists,
    reqcateList,
    reqcategoryData,
    reqbanners,
    reqcolumn,
    reqrecommend,
    reqtenfifteen,
    reqfindMore,
    reqyzm
} from '../api'

//  同步头部信息
const header = (headerContent) => ({type: RECEIVE_HEADER, data: headerContent})
//  同步活动列表
const focuslist = (headerContent) => ({type: RECEIVE_FOCUSLIST, data: headerContent})
//  同步品牌列表
const taglist = (headerContent) => ({type: RECEIVE_TAGLIST, data: headerContent})
//  同步新品首发
const newitemlists = (headerContent) => ({type: RECEIVE_NEWITEMLISTS, data: headerContent})
// 新品首发
const ewitemlists2 = (headerContent) => ({type: RECEIVE_EWITEMLISTS2, data: headerContent})
//  同步限时购
const flashsaleindexvo = (headerContent) => ({type: RECEIVE_REQFLASHSALEINDEXVO, data: headerContent})
//  同步专题精选
const reqtopiclists = (headerContent) => ({type: RECEIVE_REQTOPICLISTS, data: headerContent})
//  同步居家好物
const topiclists = (headerContent) => ({type: RECEIVE_TOPICLISTS, data: headerContent})
//  同步分类
const categorys = (headerContent) => ({type: RECEIVE_CATEGORYS, data: headerContent})
//  同步 识物
const banners = (headerContent) => ({type: RECEIVE_BANNERS, data: headerContent})
//  同步识物下面
const column = (headerContent) => ({type: RECEIVE_COLUMN, data: headerContent})
//  同步 识物下面
const recommend = (headerContent) => ({type: RECEIVE_RECOMMEND, data: headerContent})
//  同步十点一刻
const tenfifteen = (headerContent) => ({type: RECEIVE_TENFIFTEEN, data: headerContent})
//  同步更多精彩
const findmore = (headerContent) => ({type: RECEIVE_GETFINDMORE, data: headerContent})
//  同步 验证码
const yzm = (headerContent) => ({type: RECEIVE_YZM, data: headerContent})
// 获取用户列表的异步action
export const getheader = () => {
  return async dispatch => {
    // 执行异步ajax请求
    const response = await reqHeadCateList()
     if(response.code===0){
         const result = response.data
         dispatch(header(result))
     }
  }
}

// 获取活动列表的异步action
export const getfocuslist = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqFocusList()
        if(response.code===0){
            const result = response.data
            dispatch(focuslist(result))
        }


    }
}

// 获取品牌列表的异步action
export const gettaglist = () => {
    return async dispatch => {
        const response = await reqTagList()

        if(response.code===0){
            const result = response.data
            dispatch(taglist(result))
        }


    }
}

// 获取品牌列表的异步action
export const getcolumn = () => {
    return async dispatch => {
        const response = await reqcolumn()
        if(response.code===0){
            const result = response.data
            dispatch(column(result))
        }


    }
}


// 获取新品首发的异步action
export const getnewitemlists = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqnewitemlists()
        if(response.code===0){
            const result = response.data
            dispatch(newitemlists(result))
        }


    }
}

// 获取新品首发的异步action
export const getewitemlists2 = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqnewitemlists2()
        if(response.code===0){
            const result = response.data
            dispatch(ewitemlists2(result))
        }


    }
}

// 获取限时购的异步action
export const getflashSaleIndexVO = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqflashSaleIndexVO()
        if(response.code===0){
            const result = response.data
            dispatch(flashsaleindexvo(result))
        }


    }
}

// 获取专题精选的异步action
export const gettopiclists = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqtopicLists()
        if(response.code===0){
            const result = response.data
            dispatch(reqtopiclists(result))
        }


    }
}

// 获取居家好物的异步action
export const gettopiclists1 = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqcateList()
        if(response.code===0){
            const result = response.data
            dispatch(topiclists(result))
        }


    }
}

// 获取分类的异步action
export const getcategorys = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqcategoryData()
        if(response.code===0){
            const result = response.data
            dispatch(categorys(result))
        }


    }
}

// 获取识物的异步action
export const getbanners = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqbanners()
        if(response.code===0){
            const result = response.data
            dispatch(banners(result))
        }


    }
}

// 获取识物下边的异步action
export const getrecommend = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqrecommend()
        if(response.code===0){
            const result = response.data
            dispatch(recommend(result))
        }


    }
}

// 获取识物下边的异步action
export const getrecommend1 = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqrecommend()
        if(response.code===0){
            const result = response.data
            dispatch(recommend(result))
        }


    }
}

// 获取十点一刻的异步action
export const gettenfifteen = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqtenfifteen()
        if(response.code===0){
            const result = response.data
            dispatch(tenfifteen(result))
        }


    }
}

// 获取更多精彩的异步action
export const getfindmore = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqfindMore()
        if(response.code===0){
            const result = response.data
            dispatch(findmore(result))
        }


    }
}

// 获取限时购的异步action
export const getyzm = () => {
    return async dispatch => {
        // 执行异步ajax请求
        const response = await reqyzm()
        if(response.code===0){
            const result = response.data
            dispatch(yzm(result))
        }


    }
}

