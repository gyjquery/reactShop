
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './CategoryContent.less'
import PubSub from 'pubsub-js'


class Category extends Component {
    state = {
         content:[]
    }
    componentDidMount(){

        PubSub.subscribe('content',(msg,item)=>{
                this.setState({
                    content:item
                })
        })

    }
    componentWillMount(){
        const {categorys} = this.props.headerContent
        console.log(categorys[0])
        this.setState({
            content:categorys[0]
        })
    }
    componentDidUpdate(){

    }
    render() {

        let {content}=this.state

        if(!content){
            content=[]
        }
        if(!content.subCateList) {
            content.subCateList = []
        }


        return (
            <div className="categorycontent">
                <div className="navImg"><img src={content.bannerUrl}/></div>
        <div className="text"><span></span>{content.name}<span></span></div>
        <ul>
            {content.subCateList.map((subCate,index)=>(
                <li key={index}>
                    <img src={subCate.wapBannerUrl}/>
                    <div className="categoryText">{subCate.name}</div>
                </li>
            ))

            }
    </ul>
    </div>
        )
    }
}
export default connect(
    state => ({headerContent:state.headerContent})
)(Category)