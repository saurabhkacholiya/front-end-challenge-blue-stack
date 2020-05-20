import React from 'react';
import styled from 'styled-components'

const TitleSection = styled.section`
   position: absolute;
    height: 50px;
    left: 20px;
    top: 100px;
    span{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
    }
`


export default function Title() {
  return (
      <TitleSection>
          <span>Manage Campaigns</span>
      </TitleSection>
  );
}