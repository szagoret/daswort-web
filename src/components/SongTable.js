import React from "react";
import {Pagination, Table} from "semantic-ui-react";
import Difficulty from "./Difficulty";
import {Link} from "react-router-dom";

export default ({songs, page, totalItems, pageSize, onPageChange}) => {
    const pagesCount = Math.ceil(totalItems / pageSize);

    const columns = [
        {name: "Name"},
        {name: "Author"},
        {name: "Besetzung"},
        {name: "Schwlerigkeitsgrad"},
        {name: "Thema"},
        {
            name: "Date",
            sorted: 'descending'
        }];

    const TableCols = columns.map(({name, sorted}, i) => <Table.HeaderCell key={i} sorted={sorted} content={name}/>);
    const TableRows = songs.map(
        ({
             id,
             name,
             arrangement,
             composition,
             difficulty,
             topics,
             date
         }, i) =>
            (
                <Table.Row key={i}>
                    <Table.Cell><Link to={`/song/${id}`}>{name}</Link></Table.Cell>
                    <Table.Cell>{(arrangement || {}).firstName}</Table.Cell>
                    <Table.Cell>{(composition || {}).name}</Table.Cell>
                    <Table.Cell>
                        <Difficulty value={parseInt((difficulty || {}).name) || 0}/>
                    </Table.Cell>
                    <Table.Cell>{topics.map(topic => topic.name).join(" , ")}</Table.Cell>
                    <Table.Cell>Sep. 2013</Table.Cell>
                </Table.Row>
            )
    );

    return (
        <Table sortable celled>
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
                        />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>);
};