import React from "react";
import {Container, Grid, GridColumn, GridRow, Icon, Image, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SongPage = (props) => {

    const songId = props.match.params.id;

    return (
        <Container>
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Link to="/"> <Icon name="arrow left"/> Back to home page</Link>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={12}>
                        <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                        </Segment>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Segment>
                            Song id: {songId}
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default SongPage;