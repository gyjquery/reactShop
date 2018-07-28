
import React, {Component} from 'react'
import {HashRouter, Switch, Route,Redirect,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import  Category from '../Category/Category'
import  FirstShow from '../FirstShow/FirstShow'
import  HomePage from '../HomePage/HomePage'
import  Knowledge from '../Knowledge/Knowledge'
import  Personal from '../Personal/Personal'
import  Shop from '../Shop/Shop'
import Footer from '../../components/Footer/Footer'
import {withRouter} from 'react-router-dom'

class App extends Component {
    state = {

    }
    render() {
        const path=this.props.location.pathname
        // console.log(path)
        return (
            <div className="rou">
                <Switch>
                <Route path="/firstshow" component={FirstShow}/>
                <Route path="/category" component={Category}/>
                <Route path="/homepage" component={HomePage}/>
                <Route path="/knowledge" component={Knowledge}/>
                <Route path="/personal" component={Personal}/>
                <Route path="/shop" component={Shop}/>
                <Redirect to='/firstshow' />
                </Switch>
                {path==='/firstshow' || path==='/personal'?"":<Footer/>}
            </div>
        )
    }
}
export default withRouter(App);
// export default connect(
//     state => ({user: state.user}),
//     {login}
// )(Category)