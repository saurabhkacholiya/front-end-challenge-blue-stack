import React from 'react';
import LogoImage from '../../images/logo.png';
import styled from 'styled-components'
import LocaleToggle from "../../containers/LocaleToggle";

const HeaderDiv = styled.header`
    position: absolute;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
    background: #1F2640;
    img{
        position: absolute;
        width: 147px;
        height: 45px;
        left: 20px;
        top: 15px;
    }
    section{
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translate(-50%,-50%);        
    }
`


export default function header() {
  return (
    <HeaderDiv>
      <figure>
        <img src={LogoImage} alt="Logo Image"/>
      </figure>
      <section>
        <LocaleToggle />
      </section>
    </HeaderDiv>
  );
}