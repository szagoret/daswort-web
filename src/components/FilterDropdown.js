import React from "react";
import {Button, Grid, Header, Icon, Label, Menu, Popup} from "semantic-ui-react";

export default ({name}) => (
    <Popup pinned on='click'
           trigger={<Button as={Menu.Item}> <Icon name='chevron down'/>{name}
               <Label color='teal' floating>
                   2
               </Label></Button>}
           position="bottom left">
        <Grid centered divided columns={3} style={{width: "400px"}}>
            <Grid.Column textAlign='center'>
                <Header as='h4'>Basic Plan</Header>
                <p>
                    <b>2</b> projects, a month
                </p>
                <Button>Choose</Button>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Header as='h4'>Business Plan</Header>
                <p>
                    <b>5</b> projects, a month
                </p>
                <Button>Choose</Button>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Header as='h4'>Premium Plan</Header>
                <p>
                    <b>8</b> projects, a month
                </p>
                <Button>Choose</Button>
            </Grid.Column>
        </Grid>
    </Popup>
);