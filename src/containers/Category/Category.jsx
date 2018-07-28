
import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoryList from '../../components/CategoryList/CategoryList'
import CategoryContent from '../../components/CategoryContent/CategoryContent'
import './category.less'


export default class Category extends Component {
    state = {

    }
     componentDidMount(){

     }
    render() {

        return (
            <div className="category">
                <header><i className="iconfont icon-fangdajing"></i><span>搜索商品,共10005款好物</span></header>
                <div className="categoryMain">
                    <CategoryList/>
                    <CategoryContent/>
                </div>
            </div>
        )
    }
}

