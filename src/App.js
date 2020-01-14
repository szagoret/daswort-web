import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import {Button, Checkbox, Container, Grid, Header, Icon, Image, Menu, Popup, Responsive, Segment, Sidebar, Visibility} from "semantic-ui-react";
import MainSearch from "./components/MainSearch";

const MenuItems = [
    <Menu.Item key={1} as='a' active>
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
                    <Container>
                        <Grid>
                            <Grid.Column width={4}>
                                <Menu vertical borderless>
                                    {MenuItems}
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                {children}
                            </Grid.Column>
                        </Grid>
                    </Container>
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
                <h4>Notenarchiv</h4>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={9} computer={6}>
                <MainSearch/>
            </Grid.Column>
            <Grid.Column mobile={3} tablet={2} computer={6} floated="right" textAlign="right">
                <Button as="a" basic circular icon="user"/>
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
            <Container fluid>
                <div>
                    <Menu>
                        <Popup
                            pinned
                            on='click'
                            trigger={<Menu.Item><span>Thema</span><Icon name="filter" size="small"/></Menu.Item>}
                            position="bottom left"
                        >
                            <Segment basic>
                                <Grid divided columns='equal' style={{width: "400px"}}>
                                    <Grid.Column textAlign='center'>
                                        <Checkbox label='Make my profile visible'/>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Checkbox label='Make my profile visible'/>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Checkbox label='Make my profile visible'/>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Checkbox label='Make my profile visible'/>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Checkbox label='Make my profile visible'/>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Checkbox label='Make my profile visible'/>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Popup>
                        <Popup
                            pinned
                            on='click'
                            trigger={<Button as={Menu.Item}> <Icon name='filter'/>Author</Button>}
                            position="bottom left"
                        >
                            <Grid centered divided columns={3} style={{width: "400px"}}>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>Basic Plan</Header>
                                    <p>
                                        <b>2</b> projects, $10 a month
                                    </p>
                                    <Button>Choose</Button>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>Business Plan</Header>
                                    <p>
                                        <b>5</b> projects, $20 a month
                                    </p>
                                    <Button>Choose</Button>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>Premium Plan</Header>
                                    <p>
                                        <b>8</b> projects, $25 a month
                                    </p>
                                    <Button>Choose</Button>
                                </Grid.Column>
                            </Grid>
                        </Popup>

                        <Menu.Menu position='right'>
                            <div className='ui right aligned category search item'>
                                <div className='ui transparent icon input'>
                                    <input
                                        className='prompt'
                                        type='text'
                                        placeholder='Search notes...'
                                    />
                                    <i className='search link icon'/>
                                </div>
                                <div className='results'/>
                            </div>
                        </Menu.Menu>
                    </Menu>

                    <Segment attached='bottom'>
                        <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                    </Segment>
                </div>
            </Container>
        </ResponsiveContainer>
    );
}