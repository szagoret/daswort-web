import React from "react";
import {Button, Checkbox, Container, Icon, Label, List, Menu, Popup} from "semantic-ui-react";
import {arrayOf, func, shape, string} from "prop-types";

const CheckboxDropdown = ({label, options, selectedOptions, onChange, optionLabelRender = optionLabel => optionLabel}) => {

    const values = options.map(({id, name}, i) =>
        <List.Item key={i}>
            <Checkbox
                onChange={(e, {value, checked}) => onChange(value, checked)}
                checked={selectedOptions.includes(id)}
                key={id}
                name={id}
                label={optionLabelRender(name)}
                value={id}
                style={{padding: '4px', paddingRight: '7px'}}
            />
        </List.Item>);

    const selectedCount = selectedOptions.length;

    const floatingLabel = <Label color='teal' floating> {selectedCount} </Label>;

    return (
        <Popup pinned on='click'
               trigger={<Button as={Menu.Item}> <Icon name='chevron down'/>{label} {selectedCount > 0 && floatingLabel}</Button>}
               position="bottom left">
            <Container style={{width: "250px", maxHeight: 'calc(60vh - 4em)', overflow: 'auto'}}>
                <List>
                    {values}
                </List>
            </Container>
        </Popup>
    )
};

CheckboxDropdown.propTypes = {
    label: string.isRequired,
    options: arrayOf(shape({
        id: string.isRequired,
        name: string.isRequired
    })).isRequired,
    selectedOptions: arrayOf(string).isRequired,
    onChange: func.isRequired,
    optionLabelRender: func
};

CheckboxDropdown.defaultProps = {
    label: '',
    options: [],
    selectedOptions: []
};

export default CheckboxDropdown;