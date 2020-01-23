import React from "react";
import {Icon, Menu} from 'semantic-ui-react';
import {NavLink} from "react-router-dom";

const NavMenuItems = [
    <Menu.Item key={1} as={NavLink} to="/" activeClassName="active" exact>
        <Icon name='music'/>Noten
    </Menu.Item>,
    <Menu.Item key={2} as={NavLink} to="/theory" activeClassName="active" exact>
        <Icon name='book'/>Theorie
    </Menu.Item>,
    <Menu.Item key={3} as={NavLink} to="/photos" activeClassName="active" exact>
        <Icon name='photo'/>Bilder
    </Menu.Item>,
    <Menu.Item key={4} as={NavLink} to="/events" activeClassName="active" exact>
        <Icon name='calendar'/>Veranstaltungen
    </Menu.Item>,
    <Menu.Item key={5} as={NavLink} to="/audio" activeClassName="active" exact>
        <Icon name='file audio'/>Audio
    </Menu.Item>
];


export default NavMenuItems;