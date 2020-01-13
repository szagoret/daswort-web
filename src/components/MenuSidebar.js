import React from 'react'
import {Container, Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'

const SidebarExampleVisible = () => (
    <Sidebar.Pushable as={Segment} style={{border: 'none'}}>
        <Sidebar
            as={Menu}
            icon='labeled'
            vertical
            animation='push'
            direction='left'
            dimmed={false}
            visible={true}
            width='thin'>
            <Menu.Item as='a'>
                <Icon name='music'/>Note
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='book'/>Theorie
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='photo'/>Bilder
            </Menu.Item>

            <Menu.Item as='a'>
                <Icon name='calendar'/>Veranstaltungen
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='file audio'/>Audio
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>

        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

export default SidebarExampleVisible