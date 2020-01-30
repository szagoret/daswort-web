import CheckboxDropdown from "../CheckboxDropdown";
import React from "react";
import {arrayOf, func, shape, string} from "prop-types";
import {concat, pull} from 'lodash';

const FilterDropdown = ({label, options, selectedOptions, onChange}) => {

    const onFilterChange = (id, checked) => {
        if (!checked) {
            onChange(pull([...selectedOptions], id));
        } else {
            onChange(concat(selectedOptions, [id]));
        }
    };

    return (
        <CheckboxDropdown
            label={label}
            options={options}
            selectedOptions={selectedOptions}
            onChange={onFilterChange}
        />
    )
};

FilterDropdown.propTypes = {
    label: string.isRequired,
    options: arrayOf(shape({
        id: string.isRequired,
        name: string.isRequired
    })).isRequired,
    selectedOptions: arrayOf(string).isRequired,
    onChange: func.isRequired
};

export default FilterDropdown;