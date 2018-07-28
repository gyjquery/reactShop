
import React, {Component} from 'react'

import {connect} from 'react-redux'
import Swiper from 'swiper'
import moment from 'moment'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.min.css'
import  './HomeContent.less'
import PubSub from 'pubsub-js'
import Scroll from '../../../components/Scroll/Scroll'
import Good from '../../../components/Good/Good'
class Category extends Component {
    state = {
       timer:null
    }
    componentWillUpdate(){
          if(this.acc){
              this.acc.destroy()
          }
    }
    componentDidUpdate(){

            //        swipter
            this.acc=new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            })

      if(!this.ac){
          this.ac=new BScroll('.homeCon',{
              bounce: true,
              momentumLimitDistance: 1,
              scrollY: true,
              scrollbar: {
                  fade: true,
                  interactive: false,
              },
              mouseWheel: true,
          })
      }
      let time=0
       if(!time){
           const {flashSaleIndexVO} = this.props.headerContent

            time =flashSaleIndexVO.remainTime

           const interval=setInterval(()=>{
               time-=1000
               const x= moment.duration(time);
               this.state.timer = x
               // console.log(this.state.timer)
               if(time<=0){
                   clearInterval(interval)
               }
           },1000)
       }
       if(!this.swiper1){
         setTimeout(()=>{
             this.swiper1= new Swiper ('.swiper1', {
                 slidesPerView :'auto'
             })
         },300)
       }
    }
    render() {
         const {focusList,tagList,newitemlists,newitemlists2,flashSaleIndexVO,topicLists,cateLists} = this.props.headerContent
        const newTagList = tagList.slice(0,4)
          // console.log(cateLists)
        return (
            <div className="homeCon">
                <div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {focusList.map((item,index)=>(
                                <div className="swiper-slide" key={index}>
                                    <img src={item.picUrl}/>
                                </div>
                            ))}
                        </div>

                    <div className="swiper-pagination"></div>

                </div>
                    <div className="prompt">
                        <div><i className="iconfont icon-right-1"></i>网易自营品牌</div>
                        <div><i className="iconfont icon-right-1"></i>30天无忧退货</div>
                        <div><i className="iconfont icon-right-1"></i>48小时快速退货</div>
                    </div>
                    <div className="homecontent">
                        <header>品牌制造直供商<i className="iconfont icon-icon--"></i></header>
                        <div className="homecon">
                            {newTagList.map((newTag,index)=>(
                                <div key={index}>
                                    <img src={newTag.picUrl}/>
                                    <span className="title">{newTag.name}</span>
                                    <span className="money">{newTag.floorPrice}元</span>
                                </div>
                            ))}

                    </div>
                </div>
                    <div>
                        <div className="newHeader">
                            <span className=" shoufa">新品首发</span>
                            <span className="see">查看全部&gt;</span>
                        </div>
                        <Scroll newitemlists={newitemlists} a={1}/>
                </div>
                    <div>
                        <div className="newHeader">
                            <span className=" shoufa">人气推荐</span>
                            <span className="see">查看全部&gt;</span>
                        </div>
                        <Scroll  a={2} newitemlists={newitemlists2}/>
                </div>
                    <div className="activity">
                        <div className="left-item">
                            <div>严选限时购</div>
                            {this.state.timer?<div><span>{this.state.timer._data.hours}</span><a>:</a><span>{this.state.timer._data.minutes}</span><a>:</a><span>{this.state.timer._data.seconds}</span></div>:null}
                            <div>{flashSaleIndexVO.nextStartTime} </div>
                        </div>
                        <img src={flashSaleIndexVO.primaryPicUrl}/>
                </div>
                    <div className="welfare"></div>
                    <div className="homecontent">
                        <header>专题精选<i className="iconfont icon-icon--"></i></header>
                        <div className="swiper1">
                             <div className="swiper-wrapper">
                                 {topicLists.slice(0,3).map((item,index)=>(
                                     <div className="swiper-slide swip" key={index}>
                                     <img className="swiperImg" src={item.itemPicUrl}/>
                                     <div className="textC">{item.title}<span>{item.priceInfo}元起</span></div>
                                     <div className="textCC">{item.subtitle}</div>
                                     </div>
                                     ))}
                        </div>
                    </div>
                </div>
                    {cateLists.map((cateList,index)=>(
                        <div className="goodContent" key={index}>
                            <header>{cateList.name}</header>
                            {cateList.itemList.map((cate,index)=>(
                                <Good cate={cate} key={index}/>
                            ))}
                            <div className="whole">
                                <span>更多居家好物</span>
                                <i className="iconfont icon-youjiantou"></i>
                            </div>
                        </div>
                    ))}
                    <footer>
                        <div className="foot">
                            <div>下载APP</div>
                            <div>电脑版</div>
                        </div>
                        <div className="copy">网易公司版权所有&copy; 1997-2018</div>
                        <div className="idNum">视食品经营许可证:JY13301080111719</div>
                    </footer>
    </div>
    </div>
        )
    }
}

export default connect(
    state => ({headerContent: state.headerContent})
)(Category)