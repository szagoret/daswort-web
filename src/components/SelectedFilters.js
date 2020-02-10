import React, {createElement} from "react";
import {Container, Icon, Label} from "semantic-ui-react";
import {concat} from 'lodash';
import Difficulty from "./Difficulty";
import {arrayOf, func, shape, string} from "prop-types";
import IdNameType from "../data-types/IdNameType";

const SelectedFilters = ({
                             filtersOptions: {
                                 topics,
                                 authors,
                                 difficulties,
                                 compositions,
                                 instruments
                             },
                             searchCriteria: {
                                 topicsIds,
                                 authorsIds,
                                 compositionsIds,
                                 difficultiesIds,
                                 instrumentsIds
                             }, resetFilters, setValue
                         }) => {

    const deleteSelectedFilter = (selectedIds, id, filterName) => {
        const updatedFilters = selectedIds.filter(selectedId => selectedId !== id);
        setValue({[filterName]: updatedFilters})
    };

    const createFilters = (options, selectedIds, filterName, as) =>
        selectedIds.map(id => {
            const value = (options.find(option => option.id === id) || {}).name;
            return (
                <Label key={`filter-${filterName}-${id}`}
                       style={{margin: '1px'}}
                       basic>
                    {as ? createElement(as, {}, value) : value}
                    <Icon name='delete' onClick={() => deleteSelectedFilter(selectedIds, id, filterName)}/>
                </Label>
            );
        });

    const filters = concat(
        createFilters(topics, topicsIds, 'topicsIds'),
        createFilters(authors, authorsIds, 'authorsIds'),
        createFilters(difficulties, difficultiesIds, "difficultiesIds", Difficulty),
        createFilters(compositions, compositionsIds, 'compositionsIds'),
        createFilters(instruments, instrumentsIds, 'instrumentsIds')
    );


    return (
        <Container>
            {filters}
            {filters.length > 0 && <a href={`# `} style={{cursor: 'pointer', paddingLeft: '2px'}} onClick={resetFilters}>Clear All</a>}
        </Container>
    );
};

SelectedFilters.propTypes = {
    filtersOptions: shape({
        topics: arrayOf(IdNameType),
        authors: arrayOf(IdNameType),
        difficulties: arrayOf(IdNameType),
        compositions: arrayOf(IdNameType),
        instruments: arrayOf(IdNameType)
    }).isRequired,
    searchCriteria: shape({
        topicsIds: arrayOf(string),
        authorsIds: arrayOf(string),
        compositionsIds: arrayOf(string),
        difficultiesIds: arrayOf(string),
        instrumentsIds: arrayOf(string)
    }).isRequired,
    resetFilters: func.isRequired,
    setValue: func.isRequired
};

SelectedFilters.defaultProps = {
    filtersOptions: {
        topics: [],
        authors: [],
        difficulties: [],
        compositions: [],
        instruments: []
    },
    searchCriteria: {
        topicsIds: [],
        authorsIds: [],
        compositionsIds: [],
        difficultiesIds: [],
        instrumentsIds: []
    }
};

export default SelectedFilters;