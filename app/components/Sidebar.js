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
    justify-content: flex-start;
    align-items: center;
`

const Sidebar = () => {
  return (
    <Container>
        <Header>
          <Image src="/Logo.png" alt="Logo" width={104} height={35}/>
        </Header>
        <Menu>
            <MenuItem href="#">
                <Image src="/home.png" alt="New" width={20} height={20}/>
                Home
            </MenuItem>
            <MenuItem href="#">
                <Image src="/Invoices.png" alt="Invoices" width={20} height={20}/>
                Invoices
            </MenuItem>
            <MenuItem href="#">
                <Image src="/Customers.png" alt="Clients" width={20} height={20}/>
                Customers
            </MenuItem>
            <MenuItem href="#">
                <Image src="/Products.png" alt="Settings" width={20} height={20}/>
                Products
            </MenuItem>
            <MenuItem href="#">
                <Image src="/Recurring.png" alt="Settings" width={20} height={20}/>
                Recurring
            </MenuItem>
            <MenuItem href="#">
                <Image src="/Discount.png" alt="Settings" width={20} height={20}/>
                Discount
            </MenuItem>
        </Menu>
    </Container>
  )
}

export default Sidebar;