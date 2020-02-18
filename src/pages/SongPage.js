import React, {useEffect, useState} from "react";
import {Button, Confirm, Container, Grid, GridColumn, GridRow, Icon, Segment, Table} from "semantic-ui-react";
import {Link, useHistory, useParams} from "react-router-dom";
import {deleteSongByIdApi, findSongById} from "../api/NotesApi";
import Difficulty from "../components/Difficulty";
import moment from "moment";
import PDFDocument from "../components/PdfDocument";

const SongPage = () => {

    const {songId} = useParams();

    const history = useHistory();

    const [song, setSong] = useState({
        arrangement: {}, composition: {}, difficulty: {}, topics: []
    });

    const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false);

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
            <Grid stackable>
                <GridRow>
                    <GridColumn>
                        <Link to="/"> <Icon name="arrow left"/> Back to home page</Link>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={10} className="pdf-file-viewer">
                        <PDFDocument
                            file="http://localhost:8080/api/song/5e0084ae7ae3d713a5ee7964/files/003e417f-9a85-4560-9b39-eb914ba45cd1/download"/>
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
                                            Author
                                        </Table.Cell>
                                        <Table.Cell singleLine>{song.arrangement.firstName}{' '}{song.arrangement.lastName}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Besetzung
                                        </Table.Cell>
                                        <Table.Cell>{song.composition.name}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Schwlerigkeitsgrad
                                        </Table.Cell>
                                        <Table.Cell><Difficulty>{song.difficulty.name}</Difficulty></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Thema
                                        </Table.Cell>
                                        <Table.Cell>{song.topics.map(topic => topic.name).join(" , ")}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Date
                                        </Table.Cell>
                                        <Table.Cell
                                            singleLine>{moment(song.createdAt).isValid() ? moment(song.createdAt).format('DD-MM-YYYY') : null}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan="2">
                                            <Button basic color='blue' onClick={editSong}>
                                                <Icon name='edit outline'/>
                                                Edit
                                            </Button>
                                            <Button basic color='red' onClick={() => setIsRemovePopupOpen(true)}>
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
            <Confirm
                open={isRemovePopupOpen}
                onCancel={() => setIsRemovePopupOpen(false)}
                onConfirm={() => removeSong()}
            />
        </Container>
    );
};

export default SongPage;