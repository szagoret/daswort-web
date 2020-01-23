import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import ResponsiveContainer from "./containers/ResponsiveContainer";
import NotesPage from "./pages/NotesPage";

export default () => {
    return (
        <ResponsiveContainer>
            <NotesPage/>
        </ResponsiveContainer>
    );
}