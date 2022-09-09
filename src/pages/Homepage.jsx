import React from 'react'
import styled from 'styled-components'
import teslaVideo from '../assets/tesla.mkv'
import { SiTesla } from 'react-icons/si'

const Homepage = () => {
    return (

        <Home>
            <Background autoPlay muted src={teslaVideo} />
            <LogoWrapper>
                <TeslaLogo />
                <Header>Model 3</Header>
            </LogoWrapper>


        </Home>
    )
}

export default Homepage

const Home = styled.div`
display: flex;

justify-content:center ;

`;
const Background = styled.video`
width:100%;
height:100%;
z-index:-10;
position:relative;



`;
const LogoWrapper = styled.div`
width:30%;
height:250px;
/* border:1px solid black; */
position:absolute;
display:flex;
align-items:center;
flex-direction:column;
top:10%;
animation:logoin 3s ease-in;

@keyframes logoin{
    0%{
        opacity:0;
    }
    50%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}

`;
const TeslaLogo = styled(SiTesla)`
color:red;
width:150px ;
height:150px;
`;

const Header = styled.h2`
text-transform:capitalize;
font-size:40px;
font-weight:500;
margin:0;
color:white;



`;