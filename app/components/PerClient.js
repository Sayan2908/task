import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { useMemo } from 'react';
import Image from 'next/image';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.65vw;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;

    .bar{
        width: 18.122vw;
        height: 3.3vw;
        padding-left: 2.058vw; 
        border-radius: 0.331vw;
        background-color: #F1F1F1;

        font-size: 1.058vw;
        font-weight: 400;
        color: #979797;
        border: none;
    }

    .button{
        width: 10.251vw;
        height: 3.8vw;
        padding: 1.058vw 1.323vw;
        border-radius: 0.331vw;
        background-color: black;

        font-size: 1.058vw;
        font-weight: 400;
        color: white;
        border: none;
        cursor: pointer;
    }
`

const Table = styled.table`
    border-collapse: collapse;
    width: 69.37vw;
    /* border: 1px solid #ddd; */
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

const Th = styled.th`
    /* border: 1px solid #ddd; */
    padding: 8px;
    text-align: center;
    margin: 0;
    border: none;
`

const Td = styled.td`
    /* border: 1px solid #ddd; */
    border-top: 1px solid #E4E4E4;

    padding: 8px;
    text-align: center;
    margin: 0;
`

const Tr = styled.tr`
    /* border-top: 1px solid #E4E4E4; */
`

const Thead = styled.thead`
    background-color: white;
    color: #979797;

    font-size: 0.926vw;
    font-weight: 400;
`

const Tbody = styled.tbody`
    background-color: white;
    color: black;

    font-size: 1.058vw;
    font-weight: 500;
`

const Button = styled.button`
    background-color: white;
    border: 1px solid black;

    font-size: 0.926vw;
    font-weight: 400;

    padding: 0.5vw 2vw;
    border-radius: 0.331vw;
    cursor: pointer;

    &:hover{
        background-color: black;
        color: white;
    }
`



const Perclient = () => {

    const data = [
        {
            id : 1,
            client : "MadeByMack",
            send: "25",
            enddate: "24-20-2024",
            interval: "3/month",
            amount: "€3000",
        },
        {
            id : 2,
            client : "MadeByMack",
            send: "25",
            enddate: "24-20-2024",
            interval: "2/month",
            amount: "€3000",
        },
        {
            id : 3,
            client : "MadeByMack",
            send: "25",
            enddate: "24-20-2024",
            interval: "1/month",
            amount: "€3000",
        },
        {
            id : 4,
            client : "MadeByMack",
            send: "25",
            enddate: "24-20-2024",
            interval: "5/month",
            amount: "€3000",
        },
        {
            id : 5,
            client : "MadeByMack",
            send: "25",
            enddate: "24-20-2024",
            interval: "1/month",
            amount: "€3000",
        },
    ];

    const columns = useMemo(() => [
        {
            Header: "CLIENT",
            accessor: "client",
            Cell: ({ value }) => (
            <div style={{display: "flex",alignItems: "center"}} >
                <div style={{width: "4vw",height: "3vw",position: "relative"}} >
                <Image src="/Avatar.svg" alt="Logo" layout="fill" objectFit="contain" />
                </div>
                &nbsp;
                {value}
            </div>),
        },
        {
            Header: "# SEND",
            accessor: "send",
        },
        {
            Header: "END DATE",
            accessor: "enddate",
        },
        {
            Header: "INTERVAL",
            accessor: "interval",
        },
        {
            Header: "AMOUNT",
            accessor: "amount",
        },
        {
            Header: 'EDIT',
            Cell: ({ row }) => (
              <Button>Edit &gt;</Button>
            ),
        },
        ], []);


    const tableInstance = useTable({ columns,data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

  return (
    <Container>

    <Search>
        <input className="bar" type="text" placeholder="Search for Client" />
        <button className="button">Search</button>
    </Search>

    <Table {...getTableProps()} >
        <Thead>
            {headerGroups.map((headerGroup) => (
                <Tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <Th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</Th>
                    ))}
                </Tr>
            ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <Tr key={row.id} {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <Td key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                        ))}
                    </Tr>
                );
            })}
        </Tbody>
    </Table>

    </Container>
  )
}

export default Perclient;