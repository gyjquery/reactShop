
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './Personal.less'


export default class Category extends Component {
    state = {
        isShow:1,
        isRight:true,
        isNow:false,
        timer:10,
        yzm:true,
        writeyzm:5521,
        yamNow:5521,
        isSh:true
    }
    hander=()=>{

    }
    getYzm=()=>{
        //           防止多次误触
        if(!this.state.yzm){
            return
        }
        const yamNow=this.state.yamNow
        let timer=this.state.timer
        setTimeout(()=>{
            console.log(this.yzmNow)
        },300)
        this.state.yzm=false
        const interval=setInterval(()=>{

            this.setState({
                timer:timer--
            })
            if(this.state.timer<=0){
                clearInterval(interval)
                this.setState({
                    timer:10,
                    yzm:true
                })

            }
        },1000)
    }
    toHome=()=>{

    }
    toPhoneLogin=()=>{
         this.setState({
             isShow:2
         })
    }
    toEmailLogin=()=>{
        this.setState({
            isShow:3
        })
    }
    otherLogin=()=>{
        this.setState({
            isShow:1

        })
    }
    writePhone=()=>{
        this.setState({
            isSh:true
        })
        this.refs.ph.value=""
    }
    Loginpshone=()=>{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test(this.refs.ph.value)){
            this.setState({
                isRight:true,
                isSh:false
            })
            this.refs.hand.value=""
        }else if(!this.state.writeyzm || this.state.writeyzm.length<=4){
            console.log(1)
             this.setState({
                 isRight:false,
                 isSh:false
             })

        }else if(this.state.writeyzm===this.state.yzmNow){
            console.log("验证码正确")
        }
    }
    render() {
          const {isShow,yzm,isRight,timer,isSh} = this.state
        return (
    <div className="personal">
        <header>
                <div className="icon" onClick={this.toHome}><i className="iconfont icon-shouye"></i></div>
    <div className="wytext">网易严选</div>
    <div className="icon" onClick="toShop"><i className="iconfont icon-fangdajing"></i><i className="iconfont icon-icon"></i></div>
</header>
        {isShow===1?<div className="loginIn">
            <div className="fle">
                <div className="logoWrap"><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/></div>
                <div className="phoneLogin" onClick={this.toPhoneLogin}><i className="iconfont icon-smartphone"/><span>手机号码登录</span></div>
                <div className="emailLogin" onClick={this.toEmailLogin}><i className="iconfont icon-youxiang"/><span>邮箱账号登录</span></div>
                <div className="rec">手机号快速注册 ></div>
            </div>
            <div className="foot"><span><i className="iconfont icon-weixin"></i>微信</span>|<span><i className="iconfont icon-qq"></i>QQ</span>|<span> <i className="iconfont icon-weibo"></i>微博</span></div>
        </div>:null}
        {isShow===2? <div className="phoneLoginIn">
           <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
           <div className="phonenum"><input type="text" maxlength={11} ref="ph" placeholder="请输入手机号" onClick={this.writePhone}/></div>
           <div className="yzm"><input type="text" ref="hand" onClick={this.hander} maxlength="4" placeholder="请输入短信验证码"/><span onClick={this.getYzm} className={!yzm?'yzmColor':null}>{yzm?"获取验证码":`已发送${timer}秒`}</span></div>
            {!isSh?<span className="error">{isRight?"手机号错误":"验证码错误"}</span>:null}
           <div className="acc"><span>遇到的问题?</span><span>使用密码验证登录</span></div>
           <div className="Loginpshone" onClick={this.Loginpshone}>登录</div>
           <div className="other" onClick={this.otherLogin}>其他账号登录</div>
           <div className="zhuce">注册账号</div>
       </div>:null}
        {isShow===3? <div className="phoneLoginIn">
             <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
             <div className="phonenum"><input type="text" placeholder="邮箱账号"/></div>
             <div className="yzm"><input type="text" placeholder="密码"/></div>
             <div className="acc"><span>注册账号</span><span>忘记密码</span></div>
             <div className="Loginpshone">登录</div>
             <div className="other" onClick={this.otherLogin}>其他登录方式</div>
         </div>:null}
    </div>
        )
    }
}

// export default connect(
//     state => ({user: state.user}),
//     {login}
// )(Category)