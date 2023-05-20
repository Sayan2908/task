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

    .Image{
      background-image: url("/ProfilePic.png");
      z-index: 999;
      overflow: hidden;
    }
`

const CardText = styled.div`
    font-size: 1.5vw;
    font-weight: 700;
`

const Profile = () => {
  return (
    <Card>
      {/* <img src="/ProfilePic.png" alt="Profile" width="40vw" height="40vw" /> */}
      <div style={{width: "4vw",height: "3vw",position: "relative"}} >
                <Image src="/ProfilePic.svg" alt="Logo" layout="fill" objectFit="contain"/>
      </div>
        <CardText>John Doe</CardText>
    </Card>
  )
}

export default Profile;