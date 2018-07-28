
import React, {Component} from 'react'
import {HashRouter, Switch, Route,Redirect,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './homePage.less'

import HomeHeader from '../../components/HomeHeader/HomeHeader'
import NavBar from '../../components/NavBar/Navbar'
import HomeContent from './HomeContent/HomeContent'
import HomePublic from './HomePublic/HomePublic'

import {
    getheader,
    getfocuslist,
    gettaglist,
    getnewitemlists,
    getewitemlists2,
    getflashSaleIndexVO,
    gettopiclists,
    gettopiclists1,
    getrecommend1,
    getyzm
} from '../../redux/actions'
class HomePage extends Component {
    state = {

    }
    componentDidMount(){
      this.props.getheader()
      this.props.getfocuslist()
      this.props.gettaglist()
      this.props.getnewitemlists()
      this.props.getewitemlists2()
      this.props.getflashSaleIndexVO()
      this.props.gettopiclists()
      this.props.gettopiclists1()
      this.props.getfocuslist()


      this.props.getyzm()
    }
    render() {
        const headerNav=this.props.headerContent
        return (
            <div className="homePageCon">
                <div className="head">
                    <HomeHeader/>
                    <NavBar headerNav={headerNav}/>
                </div>
                <Switch>
                    <Route path="/homepage/homecontent/:id" component={HomeContent}/>
                    <Route path="/homepage/homepublic/:id" component={HomePublic}/>
                    <Redirect to='/homepage/homecontent/0' />
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({headerContent: state.headerContent}),
    {
        getheader,
        getfocuslist,
        gettaglist,
        getnewitemlists,
        getewitemlists2,
        getflashSaleIndexVO,
        gettopiclists,
        gettopiclists1,
        getrecommend1,
        getyzm
    }
)(HomePage)