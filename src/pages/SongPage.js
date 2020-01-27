import React, {useEffect, useState} from "react";
import {Container, Grid, GridColumn, GridRow, Icon, Image, Segment, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {findSongById} from "../api/NotesApi";

const SongPage = (props) => {

    const [song, setSong] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await findSongById(props.match.params.id);
            setSong(data);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Link to="/"> <Icon name="arrow left"/> Back to home page</Link>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={10}>
                        <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                        </Segment>
                    </GridColumn>
                    <GridColumn width={5}>
                        <Segment>
                            <Table celled striped>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2'>Song Details</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            Name
                                        </Table.Cell>
                                        <Table.Cell>{song.name}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Id
                                        </Table.Cell>
                                        <Table.Cell>{song.name}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Category
                                        </Table.Cell>
                                        <Table.Cell>{(song.category || {}).name}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default SongPage;