
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './Good.less'


export default class Good extends Component {
    state = {

    }
    // static propTypes={
    //     cate:PropTypes.object.isRequired
    // }
    componentDidMount(){

    }
    render() {
        let cate=this.props.cate

         if(!cate) {
             cate = {}
         }
              return (
                  <div className="good">
                      <img src={cate.primaryPicUrl}/>
                      <div className="text1">{cate.simpleDesc}</div>
                      <div className="text2">{cate.name}</div>
                      <div className="text3">￥{cate.retailPrice}</div>
                  </div>
              )

          }



}