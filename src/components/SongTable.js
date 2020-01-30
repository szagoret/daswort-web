import React from "react";
import {Icon, Menu, Table} from "semantic-ui-react";
import Difficulty from "./Difficulty";
import {Link} from "react-router-dom";

export default ({songs}) => {
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
    const rows = [
        {
            id: '5df319082294eccaa11f2f94',
            name: "Dankt dem Hern",
            author: "Heinich Baueg",
            composition: "Orchester",
            difficulty: 3,
            theme: "Dank",
            date: "Sep. 2013"
        },
        {
            id: '5df319082294eccaa11f2f8c',
            name: "Du grosser Gott",
            author: "Adrian Perebikovski",
            composition: "Quintett",
            difficulty: 4,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            id: '5df319082294eccaa11f2f8d',
            name: "Er lebt",
            author: "Adrian Perebikovski",
            composition: "Sexstett",
            difficulty: 1,
            theme: "Dank",
            date: "Sep. 2019"
        },
        {
            name: "Freue dich Welt",
            author: "Arnold Klatt",
            composition: "Orchester",
            difficulty: 4,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Gehe in den Weinberg",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 4,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Heilige Nacht",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 5,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Gehe in den Weinberg",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 4,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Heilige Nacht",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 5,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Gehe in den Weinberg",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 4,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Heilige Nacht",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 5,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Gehe in den Weinberg",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 4,
            theme: "Dank",
            date: "Sep. 2018"
        },
        {
            name: "Heilige Nacht",
            author: "Heinrich Baueg",
            composition: "Quintett",
            difficulty: 5,
            theme: "Dank",
            date: "Sep. 2018"
        }
    ];

    const TableCols = columns.map(({name, sorted}, i) => <Table.HeaderCell key={i} sorted={sorted} content={name}/>);
    const TableRows = songs.map(({
                                     id,
                                     name,
                                     melodyAuthor,
                                     composition,
                                     difficulty,
                                     topics,
                                     date
                                 }, i) =>
        (
            <Table.Row key={i}>
                <Table.Cell><Link to={`/song/${id}`}>{name}</Link></Table.Cell>
                <Table.Cell>{melodyAuthor.firstName}</Table.Cell>
                <Table.Cell>{composition.name}</Table.Cell>
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
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left'/>
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right'/>
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>);
};