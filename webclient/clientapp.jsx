// requiring the needed packages
const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, hashHistory, Route, Router} = require('react-router');
const NavBar = require('./components/js/NavBar.jsx');
//const Home = require('./clientapp1.jsx');
const login = require('./components/login/login.jsx');
const dnd = require('./components/dnd/index.jsx').default;
const home = require('./components/js/ContentComponents.jsx');
const MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={dnd}/>
    <Route component={MainComp}>
        {/* <Route path="/favourites" component={About}/> */}
        <Route path="/home" component={home}/>
    </Route>
</Router>, document.getElementById('app'));
