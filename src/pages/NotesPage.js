import React from "react";
import {Link} from "react-router-dom";
import {Breadcrumb, Card, Message, Segment} from "semantic-ui-react";
import FilterMenu from "../components/FilterMenu";
import SongTable from "../components/SongTable";

const NotesPage = () => (
    <>
        <FilterMenu/>
        <SongTable/>
        <div>
            <Message attached header='Categories'/>
            <Segment attached>
                <Breadcrumb style={{margin: ".875em .5em"}}>
                    <Breadcrumb.Section as={Link} to="/asa/e/bine" content="Prima"/>
                    <Breadcrumb.Divider content="/"/>
                    <Breadcrumb.Section as={Link} to="/asa/e/bine" content="A doua"/>
                    <Breadcrumb.Divider content="/"/>
                    <Breadcrumb.Section content="Ultima"/>
                </Breadcrumb>
            </Segment>
            <Card.Group className='attached fluid segment'>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
                <Card link header='Rick Sanchez' meta='Scientist'/>
            </Card.Group>
        </div>
    </>
);


export default NotesPage;