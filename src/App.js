import React, {Suspense} from 'react';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ResponsiveContainer from "./containers/ResponsiveContainer";
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import {history} from './utils/history';
import store from './store/store';
import {toast} from 'react-toastify';
import {AdminPage, AudioPage, EventsPage, NotesPage, PhotosPage, SongListPage, SongPage, TheoryPage} from './pages';
import SongForm from "./components/SongForm";

toast.configure();
export default () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Suspense fallback="loading">
                    <ResponsiveContainer>
                        <Switch>
                            <Route exact path={"/"} component={NotesPage}/>
                            <Route exact path={"/song/:songId"} component={SongPage}/>
                            <Route exact path={"/song/:songId/edit"}>
                                <SongForm/>
                            </Route>
                            <Route exact path={"/songs"} component={SongListPage}/>
                            <Route exact path={"/theory"} component={TheoryPage}/>
                            <Route exact path={"/photos"} component={PhotosPage}/>
                            <Route exact path={"/events"} component={EventsPage}/>
                            <Route exact path={"/audio"} component={AudioPage}/>
                            <Route exact path={"/admin"} component={AdminPage}/>
                        </Switch>
                    </ResponsiveContainer>
                </Suspense>
            </Router>
        </Provider>
    );
}