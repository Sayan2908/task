"use client"

import React from 'react';
import { styled } from 'styled-components';
import Perclient from '../components/PerClient';
import Sidebar from '../components/Sidebar';
import DueCard from '../components/Due';
import Profile from '../components/Profile';

const Contents= styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
`

const Container =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 5vw;
    margin-top: 2.5vw;
`

const TopBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 10.25vw;
    background-color: #D9D9D9;
    background-image: url("/Fill.png");
    background-blend-mode: hard-light;
`

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Invoices = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.68vw;
`

const InvoicesLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    width: 19vw;
    height: 4.1vw;

    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.38vw 2.71vw;
    gap: 0.6vw; 
    border-radius: 0.3vw;
    border : none;

    font-size: 1.058vw;
    font-weight: 400;
    cursor: pointer;
`

const HeadingText = styled.div`
    font-size: 3.175vw;
    font-weight: 700;
    text-align: center;
    margin: 0;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2.18vw 1.32vw;
    gap: 2.77vw;

    width: 19vw;
    height: 10vw;
    background: #F9F9FB;
    border-radius: 0.66vw;

    .topic{
        font-size: 0.926vw;
        font-weight: 700;
        text-align: center;
        margin: 0;
        color: #979797;
    }

    .value{
        font-size: 2.116vw;
        font-weight: 700;
        text-align: center;
        margin: 0;
        color: black;
    }

`

const Topic = styled.div`
    font-size: 2.116vw;
    font-weight: 700;
    /* text-align: center; */
    margin: 0;
    color: black;
    justify-content: flex-start;
`

const page = () => {
  return (
    <Contents>
        <TopBox></TopBox>
        <Sidebar/>
    <Container>
            <ProfileDetails>
                <DueCard paid={41} pending={35} overdue={65} />
                <Profile/>
            </ProfileDetails>
            <br></br>
            <br></br>
            <br></br>
        <Invoices>
            <InvoicesLine>
                <HeadingText>
                    Recurring Invoices
                </HeadingText>
                <Button>
                    Add Recurring Invoice &nbsp; +
                </Button>
            </InvoicesLine>
            <InvoicesLine>
                <Box>
                    <div className="topic">#RECURRING INVOICES</div>
                    <div className="value">€250</div>
                </Box>
                <Box>
                    <div className="topic">#RECURRING REVENUE</div>
                    <div className="value">€2500/month</div>
                </Box>
                <Box>
                    <div className="topic">#RECURRING OVERDUE</div>
                    <div className="value">22</div>
                </Box>
            </InvoicesLine>
        </Invoices>
        <Topic>
            Per Client
        </Topic>
        <Perclient/>
        <br />
        <br />
    </Container>
    </Contents>
  )
}

export default page;