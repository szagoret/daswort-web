import React, {useEffect, useState} from "react";
import {Button, Container, Dropdown, Form, Input, Segment} from "semantic-ui-react";
import {addSongApi, getSongFiltersApi, updateSongApi} from "../api/NotesApi";
import {string} from "prop-types";


const SongForm = ({songId}) => {
    const [filtersOptions, setFilterOptions] = useState({
        topics: [],
        authors: [],
        difficulties: [],
        compositions: [],
        instruments: []
    });

    const [id, setId] = useState(songId);

    useEffect(() => {

    }, [songId]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSongFiltersApi();
            setFilterOptions(result.data);
        };

        fetchData().catch();
    }, []);

    const [formValue, setFormValue] = useState({
        name: '',
        topicsIds: [],
        arrangementId: null,
        compositionId: null,
        difficultyId: null,
        instrumentsIds: []
    });

    const getFieldSelectOptions = (fieldName) => {
        return filtersOptions[fieldName].map(option => ({
            key: option.id,
            value: option.id,
            text: option.name
        }))
    };

    const setValue = (keyValue) => {
        setFormValue({...formValue, ...keyValue});
    };

    const createSong = () => {
        addSongApi(formValue).then(result => setId(result.data.id));
    };
    const updateSong = () => {
        updateSongApi(songId, formValue).then();
    };

    return (
        <Container>
            <Segment basic>
                <Form>
                    <Form.Field required>
                        <label>Name</label>
                        <Input placeholder='Name' onChange={(e, data) => setValue({name: data.value})}/>
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
                    {id ? <Button color='green' onClick={updateSong}>Update song</Button> :
                        <Button color='teal' onClick={createSong}>Create Song</Button>}
                </Form>
            </Segment>
        </Container>
    );
};

SongForm.propTypes = {
    songId: string
};

export default SongForm;



