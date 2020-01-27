import {Button, Grid, Image, Segment} from "semantic-ui-react";
import React from "react";
import SongSearch from "../components/SongSearch";

const PageHeader = ({children}) => (
    <Segment>
        <Grid container>
            {children}
            <Grid.Column only="computer" tablet={3} computer={2}>
                <Image as='img' width="45" height="45" src='brand.svg'/>
            </Grid.Column>
            <Grid.Column only="large screen" largeScreen={2} verticalAlign="middle">
                <h4 style={{color: '#00b5ad'}}>Notenarchiv</h4>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={9} computer={6} largeScreen={7}>
                <SongSearch/>
            </Grid.Column>
            <Grid.Column mobile={3} tablet={2} computer={6} largeScreen={5} floated="right" textAlign="right">
                <Button as="a" basic circular icon="user"/>
            </Grid.Column>
        </Grid>
    </Segment>
);

export default PageHeader;