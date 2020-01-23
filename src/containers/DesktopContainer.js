import {Container, Grid, Menu, Responsive, Visibility} from "semantic-ui-react";
import MenuItems from "../components/MenuItems";
import React from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

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
                            <Grid.Column tablet={12} computer={12} widescreen={10}>
                                <Container fluid>
                                    {children}
                                </Container>
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

export default DesktopContainer;