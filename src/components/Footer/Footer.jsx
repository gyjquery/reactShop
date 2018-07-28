
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './footer.less'
import PubSub from 'pubsub-js'

 class Category extends Component {
    state = {

    }
    activeBtn=(path)=>{
        if(this.props.location.pathname===path){
          return
        }
       this.props.history.push(path)
      if(this.props.location.pathname.slice(0,9)==='/homepage'){
         PubSub.publish('newIndex',0)
      }

    }
    render() {
        return (
            <div className="footer">
                <div onClick={()=>{this.activeBtn('/homepage')}} className={this.props.location.pathname.slice(0,9)==='/homepage'?'active':null}>
                <p>
                    <i className="iconfont icon-shouye"></i>
                </p>
                <span>首页</span>
            </div>
                <div  onClick={()=>{this.activeBtn('/knowledge')}} className={this.props.location.pathname==='/knowledge'?'active':null}>
                <p>
                    <i className="iconfont icon-bd-"></i>
                </p>
                <span>识物</span>
            </div>
                <div onClick={()=>{this.activeBtn('/category')}} className={this.props.location.pathname==='/category'?'active':null}>
                <p>
                    <i className="iconfont icon-iconyihuifu-"></i>
                </p>
                <span>分类</span>
            </div>
                <div onClick={()=>{this.activeBtn('/shop')}} className={this.props.location.pathname==='/shop'?'active':null}>
                <p >
                    <i className="iconfont icon-icon"></i>
                </p>
                <span>购物车</span>
            </div>
                <div onClick={()=>{this.activeBtn('/personal')}} className={this.props.location.pathname==='/personal'?'active':null}>
                <p >
                    <i className="iconfont icon-geren"></i>
                    <span>个人</span>
                </p>
            </div>
    </div>
        )
    }
}
export default withRouter(Category);