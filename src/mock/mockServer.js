/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './msite.json'
import shiwuData from './shiwu.json'
import categoryData from './category.json'
import  yzm from './yzm.json'


Mock.mock('/headCateList', {code:0, data: data.headCateList})
Mock.mock('/focusList', {code:0, data: data.focusList})
Mock.mock('/tagList', {code:0, data: data.tagList})
Mock.mock('/newItemList', {code:0, data: data.newItemList})
Mock.mock('/popularItemList', {code:0, data: data.popularItemList})
Mock.mock('/flashSaleIndexVO', {code:0, data: data.flashSaleIndexVO})
Mock.mock('/topicList', {code:0, data: data.topicList})
Mock.mock('/cateList', {code:0, data: data.cateList})


Mock.mock('/banner', {code:0, data: shiwuData.banner})
Mock.mock('/column', {code:0, data: shiwuData.column})
Mock.mock('/recommend', {code:0, data: shiwuData.recommend})
Mock.mock('/tenfifteen', {code:0, data: shiwuData.tenfifteen})
Mock.mock('/zhenpin', {code:0, data: shiwuData.zhenpin})
Mock.mock('/yxLook', {code:0, data: shiwuData.yxLook})
Mock.mock('/findMore', {code:0, data: shiwuData.findMore})


Mock.mock('/categoryData', {code:0, data: categoryData})
Mock.mock('/yzm', {code:0, data: yzm})
