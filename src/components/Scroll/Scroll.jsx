
import React, {Component} from 'react'

import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import './scroll.less'


export default class Scroll extends Component {
    state = {

    }
    componentDidMount(){
        const a=this.props.a;
        new BScroll('.imgScroll'+a ,{
            bounce: true,
            momentumLimitDistance: 1,
            scrollX: true

        })
    }
    render() {
        const newitemlists=this.props.newitemlists
        return (
            <div className={'imgScroll'+this.props.a}>
        <div className="slides">
            {newitemlists.map((soll,index)=>(
                <div className="slide" key={index}>
                    <img src={soll.listPicUrl}/>
                    <div className="text1">{soll.name}</div>
                    <div className="text2">{soll.simpleDesc}</div>
                    <div className="text3">{soll.retailPrice}</div>
                </div>
            ))}
        </div>
    </div>
       )
    }
}