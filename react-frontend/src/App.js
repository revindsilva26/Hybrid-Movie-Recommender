import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Home.js";
import Nav from './Nav.js';
import Banner from "./Banner.js";
import Generator from './Generator';
import SimilarMovie from './SimilarMovie';
import Personalized from './Personalized';
import Recommendation from './Recommendation';

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>

                    {/* <Route path="/generator/Similar">
                        <Nav />
                        <Banner/>
                        <SimilarMovie/>
                    </Route>   */}

                    <Route path="/personalized">
                        <Nav/>
                        <Banner/>
                        <Personalized/>
                    </Route>  

                    <Route path="/generator">
                        <Nav/>
                        <Banner/>
                        <Generator/>
                    </Route>

                    <Route path = "/recommendation">
                        <Nav/>
                        <Banner/>
                        <Recommendation movies = {window.token} params = {window.token}/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default App;
