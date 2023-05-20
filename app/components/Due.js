import React from 'react';
import { styled } from 'styled-components';

const Container =  styled.div`
    display: flex;
    padding: 0.86vw;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
    gap: 0.86vw;

    width: 38.095vw;
    z-index: 999;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.66vw;
    border-radius: 0.3vw;

    width: ${props => props.widthpercent || '30%'};
    background-color: ${props => props.color || "#BDBDBD"};
`

const Text = styled.div`
    font-size: 1.058vw;
    font-weight: 500;
    text-align: center;
    margin: 0;
`

const Header = styled.div`
    font-size: 0.66vw;
    font-weight: 400;
    text-align: center;
    margin: 0;
`

const DueCard = (props) => {

    var total = props.paid + props.pending + props.overdue;

    var paidpercent = props.paid/total*100;
    var pendingpercent = props.pending/total*100;
    var overduepercent = props.overdue/total*100;

    paidpercent = paidpercent + "%";
    pendingpercent = pendingpercent + "%";
    overduepercent = overduepercent + "%";

  return (
    <Container>
        <Text>
            Last 30 Days:
        </Text>
        <Box
            widthpercent = {paidpercent}
            color='#48C446'
        >
            <Header>PAID</Header>
            <Text>${props.paid}</Text>
        </Box>
        <Box
            widthpercent = {pendingpercent}
            color='#BDBDBD'
        >
            <Header>PENDING</Header>
            <Text>${props.pending}</Text>
        </Box>
        <Box
            widthpercent = {overduepercent}
            color='#EC615B'
        >
            <Header>OVERDUE</Header>
            <Text>${props.overdue}</Text>
        </Box>
    </Container>
  )
}

export default DueCard;