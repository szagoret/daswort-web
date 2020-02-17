import React from "react";
import {Tab} from "semantic-ui-react";
import SongForm from "../components/SongForm";

const AdminPage = () => {

    const panes = [
        {menuItem: 'Song', render: () => <Tab.Pane><SongForm/></Tab.Pane>},
        {menuItem: 'Filters', render: () => <Tab.Pane>Manage Filters</Tab.Pane>}
    ];

    return (
        <Tab panes={panes}/>
    );
};

export default AdminPage;