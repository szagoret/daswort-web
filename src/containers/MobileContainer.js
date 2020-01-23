import React, {useState} from "react";
import {Button, Container, Grid, Icon, Menu, Responsive, Sidebar} from "semantic-ui-react";
import NavMenuItems from "../components/NavMenuItems";
import PageHeader from "./PageHeader";

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
                {NavMenuItems}
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

export default MobileContainer;