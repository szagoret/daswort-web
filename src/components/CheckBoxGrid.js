import {chunkArray} from "../utils/ArrayUtils";
import React from "react";
import {Checkbox, Grid, GridColumn, List} from "semantic-ui-react";
import {arrayOf, func, number, shape, string} from "prop-types";

const CheckBoxGrid = ({options, selectedOptions, onChange, rows}) => {
    const columnsCount = options.length < rows ? 1 : Math.ceil(options.length / rows);

    const columns = () => {
        return chunkArray(options, rows).map((columnValues, i) =>
            <List key={i}>
                {
                    columnValues.map(({id, name}, i) =>
                        <List.Item key={`${id}-${i}`}>
                            <Checkbox
                                onChange={(e, {value, checked}) => onChange(value, checked)}
                                checked={selectedOptions.includes(id)}
                                key={id}
                                name={id}
                                label={name}
                                value={id}
                                style={{padding: '4px', paddingRight: '7px'}}
                            />
                        </List.Item>
                    )
                }
            </List>);
    };
    return (
        <Grid columns={columnsCount}>
            {columns().map((value, i) => <GridColumn key={i} style={{padding: '0'}}>{value}</GridColumn>)}
        </Grid>
    );
};

CheckBoxGrid.propTypes = {
    options: arrayOf(shape({
        id: string.isRequired,
        name: string.isRequired
    })).isRequired,
    selectedOptions: arrayOf(string).isRequired,
    onChange: func.isRequired,
    rows: number.isRequired
};

export default CheckBoxGrid;