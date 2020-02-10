import React, {useEffect, useState} from "react";
import {Container, Icon, Label, Menu} from "semantic-ui-react";
import {func} from "prop-types";
import FilterDropdown from "./FilterDropdown";
import {getSongFiltersApi} from "../api/NotesApi";
import Difficulty from "./Difficulty";

const FilterToolbar = ({onFilter}) => {

    const initialState = {
        topicsIds: [],
        authorsIds: [],
        compositionsIds: [],
        difficultiesIds: [],
        instrumentsIds: []
    };

    const [searchCriteria, setSearchCriteria] = useState(initialState);

    useEffect(() => {
        onFilter(searchCriteria);
    }, [searchCriteria, onFilter]);

    const [filtersOptions, setFilterOptions] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSongFiltersApi();
            setFilterOptions(result.data);
        };

        fetchData().catch();
    }, []);

    const setValue = (keyValue) => {
        setSearchCriteria({...searchCriteria, ...keyValue});
    };

    return (
        <>
            <Menu>
                <FilterDropdown label="Thema"
                                options={filtersOptions.topics}
                                selectedOptions={searchCriteria.topicsIds}
                                onChange={(topicsIds) => setValue({topicsIds})}
                />
                <FilterDropdown
                    label="Author"
                    options={filtersOptions.authors}
                    selectedOptions={searchCriteria.authorsIds}
                    onChange={(authorsIds) => setValue({authorsIds})}
                    styles={{width: '550px'}}
                    rows={15}
                />
                <FilterDropdown
                    label="Schwierigkeitsgrad"
                    options={filtersOptions.difficulties}
                    selectedOptions={searchCriteria.difficultiesIds}
                    onChange={(difficultiesIds) => setValue({difficultiesIds})}
                    as={Difficulty}
                />
                <FilterDropdown
                    label="Besetzung"
                    options={filtersOptions.compositions}
                    selectedOptions={searchCriteria.compositionsIds}
                    onChange={(compositionsIds) => setValue({compositionsIds})}
                />
                <FilterDropdown
                    label="Instruments"
                    options={filtersOptions.instruments}
                    selectedOptions={searchCriteria.instrumentsIds}
                    onChange={(instrumentsIds) => setValue({instrumentsIds})}
                />
            </Menu>
            <Container>
                <Label basic>
                    Tag
                    <Icon name='delete'/>
                </Label>
            </Container>
        </>
    );
};

FilterToolbar.propTypes = {
    onFilter: func.isRequired
};

export default FilterToolbar;