
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './Navbar.less'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'
import PubSub from 'pubsub-js'


class Navbar extends Component {
    state = {
        activeIndex:0
    }
    componentDidMount(){
        new BScroll('.wrapper',{
            scrollX: true,
            click:true
        })
        PubSub.subscribe('newIndex',(msg,newIndex)=>{
             this.setState({
                 activeIndex:newIndex
             })
        })
    }
    toHomes({index,item}){
       if(index===0){
         this.props.history.replace(`/homepage/homecontent/${index}`)

       }else{
           this.props.history.replace(`/homepage/homepublic/${index}`)
           PubSub.publish('activeContent',item)
       }
       this.setState({
           activeIndex:index
       })
    }
    render() {
      const headerNav = this.props.headerNav.headerNav
        const {activeIndex} = this.state
        return (
            <div className="wrapper nav">
                <ul>
                    {headerNav.map((item,index)=>(
                    <li onClick={()=>{this.toHomes({index,item})}} key={index}>
                        <span className={activeIndex===index?'textColor':null}>{item.name}</span>
                        <span className={activeIndex===index?'line':null}></span>
                    </li>
                ))}
                </ul>
                </div>
        )
    }
}
export default withRouter(Navbar);