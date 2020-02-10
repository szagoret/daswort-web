import React, {useEffect, useState} from "react";
import {Menu} from "semantic-ui-react";
import {func} from "prop-types";
import FilterDropdown from "./FilterDropdown";
import {getSongFiltersApi} from "../api/NotesApi";
import Difficulty from "./Difficulty";
import SelectedFilters from "./SelectedFilters";

const FilterToolbar = ({onFilter}) => {

    const initialSearchState = {
        topicsIds: [],
        authorsIds: [],
        compositionsIds: [],
        difficultiesIds: [],
        instrumentsIds: []
    };

    const initialOptionsState = {
        topics: [],
        authors: [],
        difficulties: [],
        compositions: [],
        instruments: []
    };

    const [searchCriteria, setSearchCriteria] = useState(initialSearchState);

    useEffect(() => {
        onFilter(searchCriteria);
    }, [searchCriteria, onFilter]);

    const [filtersOptions, setFilterOptions] = useState(initialOptionsState);

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


    const resetFilters = () => {
        setSearchCriteria({...initialSearchState});
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
            <SelectedFilters searchCriteria={searchCriteria}
                             filtersOptions={filtersOptions}
                             resetFilters={resetFilters}
                             setValue={setValue}
            />
        </>
    );
};

FilterToolbar.propTypes = {
    onFilter: func.isRequired
};

export default FilterToolbar;