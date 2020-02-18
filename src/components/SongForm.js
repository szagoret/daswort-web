import React, {useEffect, useState} from "react";
import {Button, Container, Dropdown, Form, Icon, Input, Segment} from "semantic-ui-react";
import {addSongApi, findSongById, getSongFiltersApi, updateSongApi} from "../api/NotesApi";
import {string} from "prop-types";
import {toast} from 'react-toastify';
import {isNotEmpty} from "../utils/StringUtils";
import {useParams} from "react-router-dom";


const SongForm = () => {

    const {songId} = useParams();

    const [filtersOptions, setFilterOptions] = useState({
        topics: [],
        authors: [],
        difficulties: [],
        compositions: [],
        instruments: []
    });

    const [id, setId] = useState();

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
        addSongApi(formValue).then(result => {
            setId(result.data.id);
            toast(`Erstellt: ${result.data.name}`, {pauseOnFocusLoss: true});
        });
    };
    const updateSong = () => {
        updateSongApi(id, formValue).then(value => toast("Aktualisiert", {pauseOnFocusLoss: true}));
    };

    return (
        <Container>
            <Segment basic>
                <Form>
                    <Form.Field required>
                        <label>Name</label>
                        <Input placeholder='Name' value={formValue.name} onChange={(e, data) => setValue({name: data.value})}/>
                    </Form.Field>
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
                    {id ? <Button basic color='blue' disabled={!isNotEmpty(formValue.name)} onClick={updateSong}>
                            <Icon name='edit outline'/>Update song</Button> :
                        <Button color='teal' onClick={createSong} disabled={!isNotEmpty(formValue.name)}>
                            <Icon name='add circle'/>
                            Create Song
                        </Button>}
                </Form>
            </Segment>
        </Container>
    );
};

SongForm.propTypes = {
    songId: string
};

export default SongForm;



