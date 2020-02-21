import React, {useEffect, useState} from "react";
import {Button, Container, Dropdown, Form, Icon, Label, Segment} from "semantic-ui-react";
import {addSongApi, findSongById, getSongFiltersApi, updateSongApi} from "../api/NotesApi";
import {string} from "prop-types";
import {toast} from 'react-toastify';
import {isNotEmpty} from "../utils/StringUtils";
import {useParams} from "react-router-dom";
import SongFileUpload from "./SongFileUpload";


const SongForm = () => {

    const {songId} = useParams();

    const [isSongUpdating, setIsSongUpdating] = useState(false);

    const [filtersOptions, setFilterOptions] = useState({
        topics: [],
        authors: [],
        difficulties: [],
        compositions: [],
        instruments: []
    });

    const [id, setId] = useState();

    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (songId) {
            findSongById(songId).then(({data}) => {
                setFormValue({
                    name: data.name,
                    topicsIds: data.topics.map(topic => topic.id),
                    arrangementId: data.arrangement.id,
                    compositionId: data.composition.id,
                    difficultyId: data.difficulty.id,
                    instrumentsIds: data.instruments.map(instrument => instrument.id),
                });
                setFiles([...data.files])
            });
            setId(songId);
        }
    }, [songId]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSongFiltersApi();
            setFilterOptions(result.data);
        };

        fetchData().catch(reason => toast.error('Error'));
    }, []);

    const [formValue, setFormValue] = useState({
        name: '',
        topicsIds: [],
        arrangementId: null,
        compositionId: null,
        difficultyId: null,
        instrumentsIds: []
    });

    const getFieldSelectOptions = fieldName => filtersOptions[fieldName].map(option => ({
        key: option.id,
        value: option.id,
        text: option.name
    }));

    const setValue = (keyValue) => {
        setFormValue({...formValue, ...keyValue});
    };

    const createSong = () => {
        setIsSongUpdating(true);
        addSongApi(formValue).then(result => {
            setId(result.data.id);
            setIsSongUpdating(false);
            toast(`Erstellt: ${result.data.name}`, {pauseOnFocusLoss: true});
        });
    };
    const updateSong = () => {
        setIsSongUpdating(true);
        updateSongApi(id, formValue).then(value => {
            setIsSongUpdating(false);
            toast("Aktualisiert", {pauseOnFocusLoss: true});
        });
    };

    return (
        <Container>
            <Segment basic>
                <Form>
                    {id &&
                    <Label style={{marginBottom: '2rem'}} basic color="blue">
                        {id}
                    </Label>
                    }
                    <Form.Group>
                        <Form.Input label="Name"
                                    placeholder='Name'
                                    width={5}
                                    value={formValue.name}
                                    onChange={(e, data) => setValue({name: data.value})}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Author</label>
                            <Dropdown
                                placeholder='Author'
                                selection
                                clearable
                                value={formValue.arrangementId}
                                onChange={(e, data) => setValue({arrangementId: data.value})}
                                options={getFieldSelectOptions("authors")}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Thema</label>
                            <Dropdown
                                placeholder='Thema'
                                multiple
                                search
                                clearable
                                selection
                                value={formValue.topicsIds}
                                onChange={(e, data) => setValue({topicsIds: data.value})}
                                options={getFieldSelectOptions("topics")}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Schwlerigkeitsgrad</label>
                            <Dropdown
                                placeholder='Schwlerigkeitsgrad'
                                search
                                selection
                                clearable
                                value={formValue.difficultyId}
                                onChange={(e, data) => setValue({difficultyId: data.value})}
                                options={getFieldSelectOptions("difficulties")}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Besetzung</label>
                            <Dropdown
                                placeholder='Besetzung'
                                search
                                selection
                                clearable
                                value={formValue.compositionId}
                                onChange={(e, data) => setValue({compositionId: data.value})}
                                options={getFieldSelectOptions("compositions")}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Instruments</label>
                            <Dropdown
                                placeholder='Instruments'
                                multiple
                                clearable
                                search
                                selection
                                value={formValue.instrumentsIds}
                                onChange={(e, data) => setValue({instrumentsIds: data.value})}
                                options={getFieldSelectOptions("instruments")}
                            />
                        </Form.Field>
                    </Form.Group>


                    <Segment basic>
                        {id ? <Button basic color='blue' loading={isSongUpdating} disabled={!isNotEmpty(formValue.name)} onClick={updateSong}>
                                <Icon name='edit outline'/>Update song</Button> :
                            <Button color='teal' loading={isSongUpdating} onClick={createSong} disabled={!isNotEmpty(formValue.name)}>
                                <Icon name='add circle'/>
                                Create Song
                            </Button>}
                    </Segment>
                    {id &&
                    <SongFileUpload songFiles={files}/>
                    }
                </Form>
            </Segment>
        </Container>
    );
};

SongForm.propTypes = {
    songId: string
};

export default SongForm;



