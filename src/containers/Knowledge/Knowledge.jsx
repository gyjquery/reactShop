
import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Knowledge.less'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Lines from '../../components/Lines/Lines'
import BScroll from 'better-scroll'
import {getcolumn, gettenfifteen,getrecommend,getbanners,getfindmore} from '../../redux/actions'
import KnowledgeCard from '../../components/KnowledgeCard/KnowledgeCard'
import KnowleWonderful from '../../components/KnowleWonderful/KnowleWonderful'
class Knowledge extends Component {
    state = {

    }
    componentWillMount(){
        this.props.getbanners()
        this.props.getrecommend()
        this.props.getcolumn()
        this.props.gettenfifteen()
        this.props.getfindmore()
    }
     componentDidUpdate(){
        if(!this.acc){
            this.sw = new Swiper ('.swiper-container', {
                loop: true,
                slidesPerView: 'auto',
            })
        }
         //   自定义滚动条
        if(!this.BS){
            this.BS=new BScroll('.mainContent',{
                bounce: true,
                momentumLimitDistance: 1,
                scrollY: true,
                scrollbar: {
                    fade: true,
                    interactive: false,
                },
                mouseWheel: true

            })
        }
      if(!this.acce){
          this.acce= new BScroll('.imgScrollX',{
              bounce: true,
              momentumLimitDistance: 1,
              scrollX: true,
              scrollY: false

          })
      }
        if(this.ss){
            this.ss=new BScroll('.single',{
                bounce: true,
                momentumLimitDistance: 1,
                scrollX: true
            })
        }
     }
    render() {
        let {banners,recommend,columns,tenfifteen,findMores} = this.props.headerContent
       console.log(findMores)
        if(!banners){
            banners={}
        }
        if(!recommend){
            recommend=[]
        }
        return (
            <div className="main1">
                <div className="Knowledge">
                    <header>
                        <div className="icon"><i className="iconfont icon-shouye"></i></div>
                        <div className="wytext">网易严选</div>
                        <div className="icon"><i className="iconfont icon-fangdajing"></i><i className="iconfont icon-icon"></i></div>
                    </header>
                    <div className="mainContent">
                        <div className="mainCon">
                            <div className="bannerswiper">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {banners.map((banner,index)=>(
                                            <div className="swiper-slide" key={index}>
                                                <img src={banner.picUrl}/>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                            <div className="imgScrollX">
                            <div className="slides">
                                {columns.map((item,index)=>(
                                    <div  className="slide" key={index}>
                                        <div className="imgCon" style={{background:`url(${item.picUrl})`}}>
                                            <p>{item.articleCount}</p>
                                        </div>
                                        <div className="text1">{item.title}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                            <Lines/>
                            {recommend.recommendBanner?<KnowledgeCard  recommend={recommend}/>:null}
                            {recommend.recommendBanner?<KnowledgeCard  recommend={recommend}/>:null}
                    <Lines/>
                <div className="scrollDog">
                    <header>十点一刻</header>
                    <div className="single">
                        <div className="singledogs">
                        {tenfifteen.map((item,index)=>(
                                <div className="singledog"  key={index}>
                                    <div>--{item.desc}--</div>
                                    <div></div>
                                    <div className="images">
                                        <img src="" alt=""/>
                                        <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt=""/>
                                        <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt=""/>
                                        <span className="ellipsis"></span>
                                        <span>人参与会话</span>
                                    </div>
                                </div>
                        ))}
                            <div className="singledog newsingledog">
                                <span>查看全部话题</span> <i className="iconfont icon-icon--"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Lines/>
                {/*<KnowledgeCard/>*/}
                <Lines/>
                <div className="video">
                    <header>严选LOOK</header>
                    <div>
                        <video src="http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg"></video>
                    </div>
                    <div>
                        <p><img src="//yanxuan.nosdn.127.net/be23f31e86d9db771072eb33f60fb067.png?imageView&quality=75&thumbnail=48y48" alt=""/><span>选妹</span></p>
                        <p>唤自然系列</p>
                    </div>
                </div>
                <div className="more">
                    更多精彩
                </div>
                            {findMores.map((findMore,index)=>(
                                <KnowleWonderful findMore={findMore} key={index}/>
                            ))}
    </div>
    </div>
    </div>
            </div>
        )
    }
}

export default connect(
    state => ({headerContent: state.headerContent}),
    {getbanners,getrecommend,getcolumn,gettenfifteen,getfindmore}
)(Knowledge)