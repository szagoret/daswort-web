import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import {Breadcrumb, Button, Card, Container, Grid, Icon, Image, Menu, Message, Responsive, Segment, Sidebar, Visibility} from "semantic-ui-react";
import MainSearch from "./components/MainSearch";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import FilterDropdown from "./components/FilterDropdown";
import SongTable from "./components/SongTable";
import MenuItems from "./components/MenuItems";

const MobileContainer = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    };

    const handleSidebarHide = () => {
        setIsOpen(false)
    };
    return (
        <Responsive as={Sidebar.Pushable} {...Responsive.onlyMobile}>
            <Sidebar as={Menu}
                     animation='overlay'
                     vertical
                     visible={isOpen}
                     onHide={handleSidebarHide}>
                {MenuItems}
            </Sidebar>
            <Sidebar.Pusher dimmed={isOpen}>
                <PageHeader>
                    <Grid.Column mobile={3}>
                        <Button onClick={handleToggle} basic icon>
                            <Icon name='sidebar'/>
                        </Button>
                    </Grid.Column>
                </PageHeader>
                <Container fluid>
                    {children}
                </Container>
            </Sidebar.Pusher>
        </Responsive>
    );
};

const DesktopContainer = ({children}) => {
    return (
        <>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <PageHeader/>
                <Visibility once={false}>
                    <Container fluid style={{paddingTop: '10px'}}>
                        <Grid>
                            <Grid.Column widescreen={2} only="widescreen"/>
                            <Grid.Column tablet={4} computer={3}>
                                <Menu vertical borderless secondary pointing>
                                    {MenuItems}
                                </Menu>
                            </Grid.Column>
                            <Grid.Column tablet={12} computer={12} widescreen={10} >
                                {children}
                            </Grid.Column>
                            <Grid.Column widescreen={2} only="widescreen"/>
                        </Grid>
                    </Container>
                </Visibility>
                <PageFooter/>
            </Responsive>
        </>
    )

};

const PageHeader = ({children}) => (
    <Segment>
        <Grid container>
            {children}
            <Grid.Column only="computer" tablet={3} computer={2}>
                <Image size='mini' src='logo.svg'/>
            </Grid.Column>
            <Grid.Column only="large screen" largeScreen={2} verticalAlign="middle">
                <h4 style={{color: '#00b5ad'}}>Notenarchiv</h4>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={9} computer={6} largeScreen={7}>
                <MainSearch/>
            </Grid.Column>
            <Grid.Column mobile={3} tablet={2} computer={6} largeScreen={5} floated="right" textAlign="right">
                <Button as="a" basic circular icon="user"/>
            </Grid.Column>
        </Grid>
    </Segment>
);

const PageFooter = () => (
    <Container fluid style={{paddingTop: '20px'}}>
        <Menu>
            <Menu.Item>
                Created by szagoret
            </Menu.Item>
        </Menu>
    </Container>
);

const ResponsiveContainer = ({children}) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

export default () => {
    return (
        <ResponsiveContainer>
            <Container fluid>
                <div>
                    <Menu>
                        <FilterDropdown name="Thema"/>
                        <FilterDropdown name="Author"/>
                        <FilterDropdown name="Besetzung"/>
                        <FilterDropdown name="Schwlerigkeitsgrad"/>
                    </Menu>
                    <SongTable/>
                    <Router>
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
                    </Router>
                </div>
            </Container>
        </ResponsiveContainer>
    );
}