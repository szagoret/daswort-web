import {Container, Menu} from "semantic-ui-react";
import React from "react";

const PageFooter = () => (
    <Container fluid style={{paddingTop: '20px'}}>
        <Menu>
            <Menu.Item>
                Created by szagoret
            </Menu.Item>
        </Menu>
    </Container>
);

export default PageFooter;