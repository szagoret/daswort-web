import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Button, Container, Grid, Icon, Image, Menu, Responsive, Sidebar, Visibility} from "semantic-ui-react";
import SearchExampleStandard from "./components/Search";

const MenuItems = [
    <Menu.Item key={1} as='a'>
        <Icon name='music'/>Note
    </Menu.Item>,
    <Menu.Item key={2} as='a'>
        <Icon name='book'/>Theorie
    </Menu.Item>,
    <Menu.Item key={3} as='a'>
        <Icon name='photo'/>Bilder
    </Menu.Item>,
    <Menu.Item key={4} as='a'>
        <Icon name='calendar'/>Veranstaltungen
    </Menu.Item>,
    <Menu.Item key={5} as='a'>
        <Icon name='file audio'/>Audio
    </Menu.Item>
];

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
                     vertical visible={isOpen}
                     onHide={handleSidebarHide}>
                {MenuItems}
            </Sidebar>
            <Sidebar.Pusher dimmed={isOpen}>
                <Container>
                    <Button onClick={handleToggle} basic icon>
                        <Icon name='sidebar'/>
                    </Button>
                </Container>
                <Container>
                    {children}
                </Container>
            </Sidebar.Pusher>
        </Responsive>
    );
};

const DesktopContainer = ({children}) => {
    return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false}>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Menu vertical>
                            {MenuItems}
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {children}
                    </Grid.Column>
                </Grid>
            </Visibility>
        </Responsive>
    )

};

const Header = () => (
    <Menu borderless fluid>
        <Menu.Item>
            <Image size='mini' src='logo.svg'/>
        </Menu.Item>
        <Menu.Item header>Noten Archiv</Menu.Item>
        <Menu.Item as='div'>
            <SearchExampleStandard/>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item link>Anmeldung</Menu.Item>
        </Menu.Menu>
    </Menu>
);

const Content = () => (
    <Container fluid style={{padding: '20px'}}>
        <Grid centered>
            <Grid.Column>
                <Container>1</Container>
            </Grid.Column>
            <Grid.Column>
                <Container>1</Container>
                <Container>2</Container>
            </Grid.Column>
            <Grid.Column>
                <Container>1</Container>
                <Container>2</Container>
                <Container>3</Container>
            </Grid.Column> <Grid.Column>
            <Container>1</Container>
            <Container>2</Container>
            <Container>3</Container>
        </Grid.Column>
        </Grid>
    </Container>
);

const ResponsiveContainer = ({children}) => (
    <>
        <Header/>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

export default () => {
    return (
        <ResponsiveContainer>
            <Content/>
        </ResponsiveContainer>
    );
}