
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './CategoryList.less'
import {getcategorys} from '../../redux/actions'
import BScroll from 'better-scroll'
import PubSub from 'pubsub-js'
 class Category extends Component {
    state = {
        activeI:0
    }
    componentDidMount(){
        this.props.getcategorys()
    }
    componentDidUpdate(){
       if(!this.bs){
          this.bs=new BScroll('.categorylist' ,{
               bounce: true,
               momentumLimitDistance: 1,
               scrollY: true,
               click:true
           })
       }
    }
     activeIndex=({index,category})=>{
        this.setState({
            activeI:index
        })
         PubSub.publish('content',category)
     }
    render() {
        const {categorys} = this.props.headerContent
        const {activeI}=this.state
        return (
            <div className="categorylist">
                <ul>
                    {categorys.map((category,index)=>(
                        <li className={index === activeI ? 'activeLi':null}  onClick={()=>{this.activeIndex({index,category})}}  key={index}>{category.name}</li>
                    ))}
                </ul>
    </div>
        )
    }
}
export default connect(
    state => ({headerContent:state.headerContent}),
    {getcategorys}
)(Category)