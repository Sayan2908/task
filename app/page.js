import Image from 'next/image'
import styles from './page.module.css'
import { styled } from 'styled-components';

const Button = styled.a`
    width: 17.32vw;
    height: 4.1vw;
    background: #F5F5F5;
    border-radius: 0.99vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.38vw 2.71vw;
`

export default function Home() {
  return (
    <div style={{display: "flex",justifyContent: "center", alignItems: "center", height: "100vh"}} >
    <Button href="/new">Task</Button>
    </div>
  )
}
