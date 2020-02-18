import React, {useEffect, useState} from "react";
import {Button, Container, Grid, GridColumn, GridRow, Icon, Image, Segment, Table} from "semantic-ui-react";
import {Link, useHistory, useParams} from "react-router-dom";
import {deleteSongByIdApi, findSongById} from "../api/NotesApi";

const SongPage = () => {

    const {songId} = useParams();

    const history = useHistory();

    const [song, setSong] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await findSongById(songId);
            setSong(data);
        };
        fetchData().catch();
    }, [songId]);

    const editSong = () => {
        history.push(`/song/${songId}/edit`);
    };
    const removeSong = () => {
        deleteSongByIdApi(songId).then(r => history.push(`/`));
    };
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
                                    <Table.Row>
                                        <Table.Cell colSpan="2">
                                            <Button basic color='blue' onClick={editSong}>
                                                <Icon name='edit outline'/>
                                                Edit
                                            </Button>
                                            <Button basic color='red' onClick={removeSong}>
                                                <Icon name='trash alternate outline'/>
                                                Remove
                                            </Button>
                                        </Table.Cell>
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