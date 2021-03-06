import React from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';

import closeImg from "../../images/close.png";

const CalendarWrapper = styled.section`
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.2);
    img{
        position: absolute;
        height: 25px;
        width: 25px;
        top: -11px;
        right: -11px;
    }
    article{
        padding: 20px;
        background: #FFFFFF;
        border-radius: 3px;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2);
        left: 50%;
        position: absolute;
        height: 30%;
        width: 80%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    @media (min-width: 600px) {
        article{
           height: initial;
           width: initial;
        }
    }   
`

export default function ScheduleCalendar({
    calendarStatus,
    setTime,
    selectedDate,
    closeCalendarModal,
}){
    if(!calendarStatus){
        return <></>
    }
    return (
        <CalendarWrapper>
            <article>
                <Calendar
                    onChange={(date) => setTime(date.getTime())}
                    value={selectedDate}
                />
                <figure onClick={closeCalendarModal}>
                    <img src={closeImg} alt="close img"/>
                </figure>
            </article>
        </CalendarWrapper>
    )
}