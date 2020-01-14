import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Button, Container, Grid, Icon, Image, Menu, Responsive, Segment, Sidebar, Visibility} from "semantic-ui-react";
import MainSearch from "./components/MainSearch";

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
                        <Menu vertical borderless>
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
        <Menu.Item>
            <MainSearch/>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item link>Anmeldung</Menu.Item>
        </Menu.Menu>
    </Menu>
);

const PageHeader = () => (
    <Container fluid style={{paddingBottom: '10px'}}>
        <Segment>
            <Grid>
                <Grid.Column mobile={2} tablet={2} computer={1}>
                    <Image size='mini' src='logo.svg'/>
                </Grid.Column>
                <Grid.Column mobile={2} tablet={3} computer={2} verticalAlign="middle">
                    <h4>Noten Archiv</h4>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={9} computer={6}>
                    <MainSearch/>
                </Grid.Column>
                <Grid.Column mobile={2} tablet={2} computer={2} floated="right" textAlign="right">
                    <Button as="a" basic icon="user" />
                </Grid.Column>
            </Grid>
        </Segment>
    </Container>
);

const Content = () => (
    <Container fluid style={{padding: '20px'}}>
        <Grid centered>
            <Grid.Row>
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
            </Grid.Row>
            <Grid.Row>
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
            </Grid.Row>
            <Grid.Row>
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
            </Grid.Row>
            <Grid.Row>
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
            </Grid.Row>
            <Grid.Row>
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
            </Grid.Row>
        </Grid>
    </Container>
);

const ResponsiveContainer = ({children}) => (
    <>
        {/*<Header/>*/}
        <PageHeader/>
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