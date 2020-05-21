import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import csvFileImage from "../../images/file.png";
import viewPriceImage from "../../images/Price.png";
import calendarImage from "../../images/calendar.png";
import reportImage from "../../images/statistics-report.png";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
};

const Table = styled.table`
  position: absolute;
  top: 200px;
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

  @media ${device.mobileM} {
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
      /* Behave  like a "row" */
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

    /* Label the data*/
	    td:nth-of-type(1):before { content: "DATE"; }
	    td:nth-of-type(2):before { content: "CAMPAIGN"; }
	    td:nth-of-type(3):before { content: "VIEW"; }
	    td:nth-of-type(4):before { content: "ACTIONS"; }

      
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
    }

    .sub-title-text{
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #7788A3;
    }

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
  justify-content: space-evenly;
  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default function EventDetails({
  openModal,
  data,
  openScheduleCalendar,
  diffBetweenCurrentDateAndGivenDate,
}) {

  return (
    <>
    <Table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>CAMPAIGN</th>
              <th>VIEW</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index) => (
               <tr key={index}>
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
                   <ImageText className="padding-left-10">View Pricing</ImageText>
                 </td>
                 <td>
                  <Section>
                     <article>
                      <ActionImage src={csvFileImage} />
                      <ImageText>CSV</ImageText>
                     </article>
                     <article>
                      <ActionImage src={reportImage} />
                      <ImageText>Report</ImageText>
                     </article>
                     <article onClick={() => openScheduleCalendar({index,item})}>
                      <ActionImage src={calendarImage}/>
                      <ImageText>Schedule Again</ImageText>
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