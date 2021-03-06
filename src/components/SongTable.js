import React from "react";
import {Icon, Pagination, Table} from "semantic-ui-react";
import Difficulty from "./Difficulty";
import {Link} from "react-router-dom";
import moment from "moment";

export default ({songs, page, totalItems, pageSize, onPageChange, sortedColumn, direction, onSorting}) => {

    const pagesCount = Math.ceil(totalItems / pageSize);

    const sortDirection = direction === 'ASC' ? 'ascending' : 'descending';

    const columns = [
        {name: "Name", prop: 'name', sortable: true},
        {name: "Author", prop: 'arrangement', sortable: true},
        {name: "Besetzung", prop: 'composition', sortable: true},
        {name: "Schwlerigkeitsgrad", prop: 'difficulty', sortable: true},
        {name: "Thema", prop: 'topics', sortable: false},
        {name: "Date", prop: 'createdAt', sortable: true}];

    const handleSort = (prop) => {
        const isColumnSortable = (columns.find(column => column.prop === prop) || {}).sortable;
        if (isColumnSortable) {
            onSorting(prop)
        }
    };

    const TableCols = columns.map(({name, prop, sortable}, i) =>
        <Table.HeaderCell
            key={i}
            sorted={sortable && sortedColumn === prop ? sortDirection : null}
            content={name}
            onClick={() => handleSort(prop)}
        />);

    const TableRows = songs.map(
        ({
             id,
             name,
             arrangement,
             composition,
             difficulty,
             topics,
             createdAt
         }, i) =>
            (
                <Table.Row key={i}>
                    <Table.Cell style={{fontSize: '1.3em'}}><Link to={`/song/${id}`}>{name}</Link></Table.Cell>
                    <Table.Cell singleLine>{arrangement.firstName}{' '}{arrangement.lastName}</Table.Cell>
                    <Table.Cell>{composition.name}</Table.Cell>
                    <Table.Cell>
                        <Difficulty>{difficulty.name}</Difficulty>
                    </Table.Cell>
                    <Table.Cell>{topics.map(topic => topic.name).join(" , ")}</Table.Cell>
                    <Table.Cell singleLine>{moment(createdAt).isValid() ? moment(createdAt).format('DD-MM-YYYY') : null}</Table.Cell>
                </Table.Row>
            )
    );

    return (
        <Table sortable striped>
            <Table.Header>
                <Table.Row>
                    {TableCols}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {TableRows}
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Pagination totalPages={pagesCount}
                                    activePage={page + 1}
                                    onPageChange={(e, {activePage}) => onPageChange(activePage - 1)}
                                    ellipsisItem={{content: <Icon name='ellipsis horizontal'/>, icon: true}}
                                    firstItem={{content: <Icon name='angle double left'/>, icon: true}}
                                    lastItem={{content: <Icon name='angle double right'/>, icon: true}}
                                    prevItem={{content: <Icon name='angle left'/>, icon: true}}
                                    nextItem={{content: <Icon name='angle right'/>, icon: true}}
                        />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>);
};