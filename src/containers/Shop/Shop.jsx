
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './Shop.less'
import {withRouter} from 'react-router-dom'

class Shop extends Component {
    state = {

    }
    toLogin=()=>{
          this.props.history.replace('/personal')
    }
    render() {

        return (
            <div className="shop">
                <header><span>购物车</span><span>领劵</span></header>
                <div className="prompt">
                    <div><i className="iconfont icon-right-1"></i>30天无忧退货</div>
                    <div><i className="iconfont icon-right-1"></i>48小时快速退款</div>
                    <div><i className="iconfont icon-right-1"></i>满88元免邮费</div>
                </div>
                <div className="login">
                    <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
                    <div>去添加点什么吧</div>
                    <button onClick={this.toLogin}>登录</button>
            </div>
    </div>
        )
    }
}
export default withRouter(Shop);
// export default connect(
//     state => ({user: state.user}),
//     {login}
// )(Category)