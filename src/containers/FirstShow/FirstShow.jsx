
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './firstShow.less'


export default class Category extends Component {
    state = {
        username: '',  // 用户名
        password: '',  // 密码
    }
    toHome=()=> {
         this.props.history.replace('/homepage')
     }
    render() {

        return (
            <div className="container">
                <div><img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" className="headerImg"/></div>
                <div><img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"></img></div>
                <div className="con">
                    <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg"/>
                    <p className="download"></p>
                    <p className="continue" onClick={this.toHome}></p>
            </div>
         </div>
        )
    }
}

// export default connect(
//     state => ({user: state.user}),
//     {login}
// )(Category)