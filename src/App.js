import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
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
                     vertical
                     visible={isOpen}
                     onHide={handleSidebarHide}>
                {MenuItems}
            </Sidebar>
            <Sidebar.Pusher dimmed={isOpen}>
                <PageHeader>
                    <Grid.Column width={2}>
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
        </>
    )

};

const PageHeader = ({children}) => (
    <Segment>
        <Grid container>
            {children}
            <Grid.Column only="computer" width={2}>
                <Image size='mini' src='logo.svg'/>
            </Grid.Column>
            <Grid.Column only="large screen" width={2} verticalAlign="middle">
                <h4>Noten Archiv</h4>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={9} computer={6}>
                <MainSearch/>
            </Grid.Column>
            <Grid.Column mobile={2} tablet={2} computer={6} floated="right" textAlign="right">
                <Button as="a" basic icon="user"/>
            </Grid.Column>
        </Grid>
    </Segment>
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
        </ResponsiveContainer>
    );
}