/*
接口请求参数模块
函数的返回值promise对象
 */
import ajax from './ajax'

//首页导航接口请求函数
export const reqHeadCateList = () => ajax("/headCateList")
//活动列表接口请求函数
export const reqFocusList = () => ajax("/focusList")
//首页内容区列表请求函数
export const reqTagList = () => ajax("/tagList")
//首页新品首发请求函数
export const reqnewitemlists = () => ajax("/newItemList")
//首页新品首发2请求函数
export const reqnewitemlists2= () => ajax("/popularItemList")
//首页限时购请求函数
export const reqflashSaleIndexVO= () => ajax("/flashSaleIndexVO")
//首页专题精选请求函数
export const reqtopicLists= () => ajax("/topicList")
//首页居家好物请求函数
export const reqcateList= () => ajax("/cateList")
//分类请求函数
export const reqcategoryData= () => ajax("/categoryData")

//识物请求函数
export const reqbanners= () => ajax("/banner")


//识物请求函数
export const reqcolumn= () => ajax("/column")

//识物 为你推荐 函数
export const reqrecommend= () => ajax("/recommend")

//十点一刻
export const reqtenfifteen= () => ajax("/tenfifteen")

//十点一刻
export const reqfindMore= () => ajax("/findMore")

export const reqyzm= () => ajax("/yzm")






