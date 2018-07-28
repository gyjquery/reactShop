
import React, {Component} from 'react'

import {connect} from 'react-redux'
import PubSub from 'pubsub-js'
import './HomePublic.less'
import Good from  '../../../components/Good/Good'
class HomePublic extends Component {
    state={

    }
    componentWillMount(){
        const {cateLists} = this.props.headerContent
        const id = this.props.match.params.id
        this.item=cateLists[id]
    }

    componentWillUnmount(){

    }
    componentDidUpdate(){
        const {cateLists} = this.props.headerContent
        const id = this.props.match.params.id
        this.item=cateLists[id]

    }
    render() {
      if(this.item){
          return (
              <div className="homePublic">
                              <div>
                                  <div className="bigImg"><img src={this.item.bannerUrl}/></div>
                                  <div className="goodContent">
                                      <header>
                                          <p>{this.item.name}</p>
                              <p>11</p>
                          </header>
                          {this.item.itemList.map((item,index)=>(
                              <Good cate={item} key={index}/>
                          ))}
                      </div>
                  </div>
              </div>
          )
      }else{
          return <div></div>
      }
    }
}

export default connect(
    state => ({headerContent: state.headerContent}),
)(HomePublic)