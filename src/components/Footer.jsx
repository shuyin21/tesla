import React from 'react'
import styled from 'styled-components'
import Speedometer from '../assets/speedometer.png';


const Footer = () => {
    return (
        <FooterWrapper>
            <Model3>
                <ModelDetails>
                    <div>
                        <SpeedoImg src={Speedometer} />
                        <h3>3.1 s</h3>
                    </div>
                    <h5>0-60 mph*</h5>

                </ModelDetails>
                <ModelDetails>
                    <h3>374 mi</h3>
                    <h5>Range (WLTP)</h5>
                </ModelDetails>
                <ModelDetails>
                    <h3>AWD</h3>
                    <h5>Dual Motor</h5>
                </ModelDetails>
                <ModelDetails>
                    <OrderBtn>Order Now</OrderBtn>
                </ModelDetails>

            </Model3>
            <FooterDetails>
                <p>Created by Gyula Nagy</p>
                <a href="https://developerchef.com">Developerchef</a>
            </FooterDetails>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
position: absolute;
bottom: 0;
width:100%;
height:20%;

display:flex;
flex-direction: column;
align-items: center;
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

const Model3 = styled.div`
width:40%;
height:50%;
display:flex;
justify-content: space-around;
`;
const ModelDetails = styled.div`
width:20%;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;


div{
    display:flex;
    align-items: center;



}
h3{
    font-size:30px ;
    color:white;
    margin:0;
}
h5{
    margin:5px 0;
    color:white;
    font-size:12px;
}
`;

const SpeedoImg = styled.img`
width:50px;
height:30px;
margin:0 10px;
`;

const OrderBtn = styled.button`
width:100%;
height:40%;
border:2px solid white;
background:transparent;
cursor:pointer;
color:white;
border-radius:3px;
font-weight:bold ;

&:hover{
    background-color:white;
    color:black;
    transition:ease-in 0.2s ;
}


`;
const FooterDetails = styled.div`
width:100%;
height:40%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
    color:white;
}
a{
    color:white;
    text-decoration: none;
    text-shadow: 1px 1px black;
}
`;