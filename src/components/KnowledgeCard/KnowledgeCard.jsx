
import React, {Component} from 'react'

import {connect} from 'react-redux'
import './KnowledgeCard.less'
import PropType from 'prop-types'


export default class KnowledgeCard extends Component {

    render() {
        const recommend= this.props.recommend
           return (
               <div>
                   {recommend.recommendBanner? <div>
                       <div className="knowledgeCard">
                           <div className="texttop">为你推荐</div>
                           <div  className="knowimage" style={{background:`url(${recommend.recommendBanner.picUrl})`}}><span>{recommend.recommendBanner.nickname}</span></div>
                           <div className="introduce">
                               <p><span>{recommend.recommendBanner.subtitle}</span><span>{recommend.recommendBanner.priceInfo}元起</span></p>
                               <p>{recommend.recommendBanner.title}</p>
                           </div>
                       </div>

                       {recommend.recommends.map((recommend,index)=>(
                           <div className="recommend" key={index}>
                               <div className="recleft">
                                   <p><img src="recommend.avatar"/><span>{recommend.nickname}</span></p>
                                   <p v-if="recommend">{recommend.title}</p>
                                   <p>{recommend.subtitle}</p>
                               </div>
                               <div className="recright"  style={{background:`url(${recommend.picUrl})`}}><span>{recommend.typeName}</span></div>
                           </div>
                       ))}
                   </div>:null}
               </div>

           )

    }
}

// export default connect(
//     state => ({user: state.user}),
//     {login}
// )(Category)