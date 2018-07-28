
import React, {Component} from 'react'
import {connect} from 'react-redux'
import './KnowleWonderful.less'


export default class Knowledge extends Component {
    state = {

    }

    render() {
        const findMore=this.props.findMore
        return (
            <div className="knowlewonderful">
                <div><img src={findMore.itemPicUrl}/></div>
        <div>{findMore.subTitle}</div>
    </div>
        )
    }
}
