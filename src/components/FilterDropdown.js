import React, {useEffect, useState} from "react";
import {Button, Checkbox, Container, Icon, Label, List, Menu, Popup} from "semantic-ui-react";

export default ({name, options, ...rest}) => {

    const [selectedItems, setSelectedItems] = useState({});

    useEffect(() => {
        console.log(JSON.stringify(selectedItems));
        console.log(JSON.stringify(options));
    }, [selectedItems]);
    const handleChange = (e, data) => {
        setSelectedItems({...selectedItems, [data.name]: data.checked});
    };

    const values = options.map(({id, name}, i) =>
        <List.Item>
            <Checkbox
                onChange={handleChange}
                checked={selectedItems[id]}
                key={i}
                name={id + ''}
                label={name}
                value={id}
                style={{padding: '4px', paddingRight: '7px'}}
                {...rest}/>
        </List.Item>);

    const selectedCount = Object.keys(selectedItems).filter(key => selectedItems[key] === true).length;

    const floatingLabel = <Label color='teal' floating> {selectedCount} </Label>;

    return (
        <Popup pinned on='click'
               trigger={<Button as={Menu.Item}> <Icon name='chevron down'/>{name} {selectedCount > 0 && floatingLabel}</Button>}
               position="bottom left">
            <Container style={{width: "250px", maxHeight: 'calc(60vh - 4em)', overflow: 'auto'}}>
                <List>
                    {values}
                </List>
            </Container>
        </Popup>
    )
};