
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './homeheader.less'


export default class Category extends Component {
    state = {

    }

    render() {

        return (
            <div className="homeHeader">
                <div className="text">网易严选</div>
                <div className="icon"><i className="iconfont icon-fangdajing"></i><span>搜索商品, 共10719款好物</span></div>
            </div>
        )
    }
}

// export default connect(
//     state => ({user: state.user}),
//     {login}
// )(Category)