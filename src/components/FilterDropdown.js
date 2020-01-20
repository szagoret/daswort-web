import React, {useEffect, useState} from "react";
import {Button, Checkbox, Container, Icon, Label, Menu, Popup} from "semantic-ui-react";

const options = [
    {
        id: 1,
        label: "Label 1",
        value: 1
    },
    {
        id: 2,
        label: "Label 2",
        value: 2
    },
    {
        id: 3,
        label: "Label 3",
        value: 3
    },
    {
        id: 4,
        label: "Label 4",
        value: 4
    },
    {
        id: 5,
        label: "Label 5",
        value: 5
    },
    {
        id: 6,
        label: "Label 6",
        value: 6
    },
    {
        id: 7,
        label: "Label 7",
        value: 7
    },
    {
        id: 8,
        label: "Label 8",
        value: 8
    }
];


export default ({name}) => {

    const [selectedItems, setSelectedItems] = useState({});

    useEffect(() => {
        console.log(JSON.stringify(selectedItems))
    });
    const handleChange = (e, data) => {
        setSelectedItems({...selectedItems, [data.name]: data.checked});
    };

    const values = options.map(({id, label, value}, i) =>
        <Checkbox onChange={handleChange} checked={selectedItems[id]} key={i} name={id + ''} label={label} value={value} style={{padding: '4px', paddingRight: '7px'}}/>);

    const selectedCount = Object.keys(selectedItems).filter(key => selectedItems[key] === true).length;

    const floatingLabel = <Label color='teal' floating> {selectedCount} </Label>;

    return (
        <Popup pinned on='click'
               trigger={<Button as={Menu.Item}> <Icon name='chevron down'/>{name}
                   {selectedCount > 0 && floatingLabel}
               </Button>}
               position="bottom left">
            <Container style={{width: "250px"}}>
                {values}
            </Container>
        </Popup>
    )
};