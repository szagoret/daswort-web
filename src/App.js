import React, {Suspense} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import ResponsiveContainer from "./containers/ResponsiveContainer";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {history} from './utils/history';
import store from './store/store';
import {AudioPage, EventsPage, NotesPage, PhotosPage, TheoryPage} from './pages';

export default () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Suspense fallback="loading">
                    <ResponsiveContainer>
                        <Switch>
                            <Route exact path={["/notes", "/"]} component={NotesPage}/>
                            <Route exact path={"/theory"} component={TheoryPage}/>
                            <Route exact path={"/photos"} component={PhotosPage}/>
                            <Route exact path={"/events"} component={EventsPage}/>
                            <Route exact path={"/audio"} component={AudioPage}/>
                        </Switch>
                    </ResponsiveContainer>
                </Suspense>
            </Router>
        </Provider>
    );
}