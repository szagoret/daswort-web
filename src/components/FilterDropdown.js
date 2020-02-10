import React from "react";
import {arrayOf, func, number, shape, string} from "prop-types";
import {concat, pull} from 'lodash';
import {Button, Icon, Label, Menu, Popup, Segment} from "semantic-ui-react";
import CheckBoxGrid from "./CheckBoxGrid";

const FilterDropdown = ({label, options, selectedOptions, onChange, rows, styles, as}) => {

    const onFilterChange = (id, checked) => {
        if (!checked) {
            onChange(pull([...selectedOptions], id));
        } else {
            onChange(concat(selectedOptions, id));
        }
    };
    const selectedCount = selectedOptions.length;

    const floatingLabel = <Label color='teal' floating> {selectedCount} </Label>;

    return (
        <Popup pinned on='click'
               trigger={<Button as={Menu.Item}> <Icon name='chevron down'/>{label} {selectedCount > 0 && floatingLabel}</Button>}
               position="bottom left">
            <Segment basic style={{...styles, overflow: 'auto'}}>
                <CheckBoxGrid
                    options={options}
                    selectedOptions={selectedOptions}
                    onChange={onFilterChange}
                    rows={rows}
                    as={as}
                />
            </Segment>
        </Popup>
    )
};
FilterDropdown.defaultProps = {
    label: '',
    options: [],
    selectedOptions: [],
    rows: 14
};

FilterDropdown.propTypes = {
    label: string.isRequired,
    options: arrayOf(shape({
        id: string.isRequired,
        name: string.isRequired
    })).isRequired,
    selectedOptions: arrayOf(string).isRequired,
    onChange: func.isRequired,
    rows: number
};

export default FilterDropdown;