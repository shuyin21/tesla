import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import teslaLogo from '../assets/tesla_logo.png'


const Nav = () => {
    return (
        <>
            <NavWrapper>
                <LogoWrapper>
                    <TeslaLogo src={teslaLogo} alt="logo" />
                </LogoWrapper>
                <LinksWrapper>
                    <ModelLinks>
                        <TLink to='/model3'>Model 3</TLink>
                        <TLink to='/modelx'>Model X</TLink>
                        <TLink to='/models'>Model y</TLink>
                        <TLink to='/models'>Model s</TLink>
                    </ModelLinks>
                    <OtherLinks>
                        <TLink to='/'>Support</TLink>
                        <TLink to='/'>Shop</TLink>
                        <TLink to='/'>Account</TLink>
                        <TLink to='/'>Menu</TLink>
                    </OtherLinks>

                </LinksWrapper>

            </NavWrapper>


        </>
    )
}

export default Nav


const NavWrapper = styled.div`
width:100%;
height:50px;
display:flex;
background-color:transparent;
position:absolute;
z-index:10;

`;

const LogoWrapper = styled.div`
width:35%;
height:100%;
display:flex;
align-items:center;
justify-content:flex-start;
padding:0 50px ;
`;
const TeslaLogo = styled.img`
width:150px;

`;
const LinksWrapper = styled.div`
width:65%;
height:100%;
display:flex;
`;
const ModelLinks = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:flex-start;

`;
const OtherLinks = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:flex-end;
padding-right:50px ;

`;
const TLink = styled(Link)`
color:#fff;
text-decoration:none;
font-weight:bold;
font-size: 14px;
margin:0 20px;
cursor:pointer;
text-transform:capitalize;
`;