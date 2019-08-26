import React, { Component } from 'react';
import "./style.css";
import {Table, Segment} from 'semantic-ui-react';

const TableList = (props) => {
   
    return (
        <Segment id="datatable">
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Updated</Table.HeaderCell>
                        <Table.HeaderCell>Last Price</Table.HeaderCell>
                        <Table.HeaderCell>Market Capitalization</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.children.map(crypto => (
                        <Table.Row key={crypto.id} data-name={crypto.name}>
                            <Table.Cell>{crypto.name}</Table.Cell>
                            <Table.Cell>{crypto.last_updated}</Table.Cell>
                            <Table.Cell>{`$ ${crypto.priceUsd}`}</Table.Cell>
                            <Table.Cell>{`$ ${crypto.market_cap}`}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Segment>
    );
};

export default TableList;