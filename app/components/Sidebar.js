import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2vw;
    gap: 2.5vw;
    width: 17.85vw;
    height: 36vw;
    border-radius: 0.99vw;
    background-color: #FFFFFF;
    z-index: 999;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    margin-top: 2vw;

    position: sticky;
    top: 0;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    text-align: center;
`

const MenuItem = styled.a`
    font-size: 1.058vw;
    font-weight: 500;
    color: #000000;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    padding: 1vw 4vw;
    border-radius: 0.33vw;

    display: flex;
    gap: 1vw;

    &:hover {
        background-color: #EEF0FF;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Sidebar = () => {
  return (
    <Container>
        <Header>
            <div style={{width: "2.5vw",height: "2.5vw",position: "absolute", left: "-3.2vw", top: "0.2vw", cursor: "pointer"}} >
                <Image src="/Back.svg" alt="Menu" layout="fill" objectFit="contain"/>
            </div>
            <div style={{width: "7vw",height: "3vw",position: "relative",marginLeft: "1vw"}} >
                <Image src="/Logo.svg" alt="Logo" layout="fill" objectFit="contain"/>
            </div>
        </Header>
        <Menu>
            <MenuItem href="#">
                <div style={{width: "1.3vw",height: "1.3vw",position: "relative"}} >
                <Image src="/home.svg" alt="New" layout="fill" objectFit="contain"/>
                </div>
                Home
            </MenuItem>
            <MenuItem href="#">
                <div style={{width: "1.3vw",height: "1.3vw",position: "relative"}} >
                <Image src="/Invoices.svg" alt="Invoices" layout="fill" objectFit="contain"/>
                </div>
                Invoices
            </MenuItem>
            <MenuItem href="#">
                <div style={{width: "1.3vw",height: "1.3vw",position: "relative"}} >
                <Image src="/Customers.svg" alt="Clients" layout="fill" objectFit="contain"/>
                </div>
                Customers
            </MenuItem>
            <MenuItem href="#">
                <div style={{width: "1.3vw",height: "1.3vw",position: "relative"}} >
                <Image src="/Products.svg" alt="Settings" layout="fill" objectFit="contain"/>
                </div>
                Products
            </MenuItem>
            <MenuItem href="#">
                <div style={{width: "1.3vw",height: "1.3vw",position: "relative"}} >
                <Image src="/Recurring.svg" alt="Settings" layout="fill" objectFit="contain"/>
                </div>
                Recurring
            </MenuItem>
            <MenuItem href="#">
                <div style={{width: "1.3vw",height: "1.3vw",position: "relative"}} >
                <Image src="/Discount.svg" alt="Settings" layout="fill" objectFit="contain"/>
                </div>
                Discount
            </MenuItem>
        </Menu>
    </Container>
  )
}

export default Sidebar;