import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const Card = styled.div`
    height: 3vw;
    width: 20.40vw;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1vw;

    border-radius: 1vw;
    padding: 1vw;
    background: #FFFFFF;
    z-index: 999;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
`

const CardText = styled.div`
    font-size: 1.058vw;
    font-weight: 500;
`

const Profile = () => {
  return (
    <Card>
        <Image src="/ProfilePic.png" alt="ProfilePic" height={50} width={50}/>
        <CardText>John Doe</CardText>
    </Card>
  )
}

export default Profile;