import React from 'react';
import styled from 'styled-components'

const ModalWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    overflow: auto;
    .modal-details {
        background: #FFFFFF;
        border-radius: 3px;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2);
        left: 50%;
        position: absolute;
        height: 60%;
        width: 80%;
        top: 50%;
        transform: translate(-50%, -50%);
        img{
            position: absolute;
            left: 20px;
            top: 20px;
            bottom: 69.62%;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.151415);
            height: 100px;
            width: 100px;
            object-fit: cover;
        }
    }

    .game-name{
      position: absolute;
      left: 140px;
      top: 60px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #2B416C;
    }
    .game-region{
      position: absolute;
      left: 140px;
      top: 90px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #9CA2B7;
    }
    .title{
      top: 35%;
      left : 20px;      
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      color: #2B416C;
      position: absolute;
    }
    .one-week{
      position: absolute;
      top: 50%;
      left: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #7788A3;
    }
    .one-week-payment{
      position: absolute;
      top: 50%;
      right: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: right;
      color: #556789;
    }
   
    .six-month{
      position: absolute;
      top: 60%;
      left: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #7788A3;
    }
    
    .six-month-payment{
      position: absolute;
      top: 60%;
      right: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: right;
      color: #556789;
    }
    
    .one-year{
      position: absolute;
      top: 70%;
      left: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #7788A3;
    }
    .one-year-payment{
      position: absolute;
      top: 70%;
      right: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: right;
      color: #556789;
    }
    .close-button{
      border: 2px solid #181B34;
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 7%;
      height: 50px;
      width: 114px;
      span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #181B34;
      }
    }
`



export default function Modal({
    modalStatus,
    closeModal,
}) {
    if(!modalStatus){
        return <></>
    }
    return (
        <ModalWrapper>
            <div className="modal-details">
                <img src="https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" />
                <span className="game-name">PUBG MOBILE</span>
                <span className="game-region">US</span>
                <span className="title">Pricing</span>
                <span className=" one-week">1 Week - 1 Month</span>
                <span className="one-week-payment">$ 100.00</span>
                <span className="six-month">6 Months</span>
                <span className="six-month-payment">$ 500.00</span>
                <span className="one-year">1 Year</span>
                <span className="one-year-payment">$ 900.00</span>
                <div 
                    className="close-button"
                    onClick={closeModal}
                >
                    <span>Close</span>
                </div>
            </div>
        </ModalWrapper>
    );
}