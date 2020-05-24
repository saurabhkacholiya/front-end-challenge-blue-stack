import React from 'react';
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
 

const TitleSection = styled.section`
    position: absolute;
    height: 50px;
    left: 20px;
    top: 100px;
    color: #2B416C;
    span{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
    }
    @media (min-width: 600px) {
        min-width: 430px;
        height: 50px;
        span{
            font-size: 48px;
        }
    }
`


export default function Title() {
  return (
      <TitleSection>
          <span> 
            <FormattedMessage {...messages.title} />
          </span>
      </TitleSection>
  );
}