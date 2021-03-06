import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import csvFileImage from "../../images/file.png";
import viewPriceImage from "../../images/Price.png";
import calendarImage from "../../images/calendar.png";
import reportImage from "../../images/statistics-report.png";
import { FormattedMessage } from 'react-intl';
import messages from "./messages";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  fullView: '600px',
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  fullView: `(min-width: ${size.fullView})`,
};

const Table = styled.table`
  position: absolute;
  top: 210px;
  border-collapse: collapse;
  margin: 20px;
  width: 350px;
  border: 1px solid #ECECEC;

  thead {
    background: #F1F1F4;
    color: #556789;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  td {
    border-bottom: 1px solid #ECECEC;
    text-align: center;
    color: #2B416C;
    font-size: 16px;
  }

  .flex-direction-column{
      display: flex;
      flex-direction: column;
    }
    .padding-left-10{
      padding-left: 10px;
    }

    .flex-direction-row{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img{
        height: 40px;
        width: 40px;
      }
    }

    .title-text{
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #2B416C;
      text-align: left;
    }

    .sub-title-text{
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #7788A3;
      text-align: left;
    }

  @media ${device.fullView} {
      position: absolute;
      width: 1000px;
      height: 48px;
      tr{
        height: 48px;
      }
      th{
        padding-left: 10px;
      }
      td{
        text-align: left;
        height: 70px;
      }
      .flex-direction-row{
        justify-content: flex-start;
      }
  }

  @media (max-width: 425px ) {
    table, thead, tbody, th, td, tr { 
		  display: block; 
	  }

    thead tr { 
      position: absolute; 
      top: -9999px; 
      left: -9999px;
	  } 

    tr{
      border: 1px solid #ECECEC;
    }
    td { 
      border: none;
      border-bottom: 1px solid #ECECEC; 
      position: relative;
      padding-left: 50%; 
      line-height: 35px;
	  }

    td:before { 
      position: absolute;
      top: 2px;
      left: 6px;
      padding-right: 10px;
      white-space: nowrap;
	  }

    /* Label the data */
	    td:nth-of-type(1):before { content: "DATE"; }
	    td:nth-of-type(2):before { content: "CAMPAIGN"; }
	    td:nth-of-type(3):before { content: "VIEW"; }
	    td:nth-of-type(4):before { content: "ACTIONS"; }
  }
`

const ImageText = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #7788A3;
`

const ActionImage = styled.img`
  height: 24px;
  width : 24px;
`

const Section = styled.section`
  display:flex;
  justify-content: space-between;
  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const EmptyList = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

export default function EventDetails({
  openModal,
  data,
  openScheduleCalendar,
  diffBetweenCurrentDateAndGivenDate,
}) {

  if(!data.length) {
    return (
      <EmptyList>
          <span>
            <strong>
              <FormattedMessage {...messages.Empty} />
            </strong>
          </span>
      </EmptyList>
    )
  }

  return (
    <>
    <Table>
          <thead>
            <tr>
              <th>{<FormattedMessage {...messages.date} />}</th>
              <th>{<FormattedMessage {...messages.campaign} />}</th>
              <th>{<FormattedMessage {...messages.view} />}</th>
              <th>{<FormattedMessage {...messages.action} />}</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index) => (
               <tr key={item.key}>
                 <td>
                  <article className="flex-direction-column padding-left-10">
                   <span className="title-text" >{moment(item.createdOn).format('MMM YYYY DD')}</span>
                   <span className="sub-title-text">{diffBetweenCurrentDateAndGivenDate(item.createdOn).value}</span>
                  </article>
                 </td>
                 <td>
                  <article className="flex-direction-row">
                    <img src={item.image_url} />
                    <article className="flex-direction-column padding-left-10">
                      <span className="title-text">{item.name}</span>
                      <span className="sub-title-text">{item.region}</span>
                    </article>
                  </article>
                 </td>
                 <td onClick={openModal}>
                   <ActionImage src={viewPriceImage}/>
                   <ImageText className="padding-left-10">
                      <FormattedMessage {...messages.viewPrice} />
                    </ImageText>
                 </td>
                 <td>
                  <Section>
                     <article>
                      <ActionImage src={csvFileImage} />
                      <ImageText>CSV</ImageText>
                     </article>
                     <article>
                      <ActionImage src={reportImage} />
                      <ImageText>
                        <FormattedMessage {...messages.report} />
                      </ImageText>
                     </article>
                     <article onClick={() => openScheduleCalendar(item.key)}>
                      <ActionImage src={calendarImage}/>
                      <ImageText>
                        <FormattedMessage {...messages.scheduleAgain} />
                      </ImageText>
                     </article>
                  </Section>
                 </td>
               </tr>
              ))
            }
          </tbody>
        </Table>
        </>
  );
}