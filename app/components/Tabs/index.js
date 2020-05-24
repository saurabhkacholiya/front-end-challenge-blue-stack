import React from 'react';
import styled from 'styled-components'

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 150px;
  left: 20px;
  height: 44px;
  @media (min-width: 600px) {
      width: 1000px;
      top: 170px;
  }
`
const Tab = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding: 0 10px 0 0;
    @media (min-width: 600px) {
      width: 178px;
      font-size: 18px;
    }

`
const SelectedTab = styled.span`
    position: relative;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding: 0 10px 0 0;
    color: #83A515;
    .border{
      position: absolute;
      height: 4px;
      background: #83A515;
      bottom: 15px;
      width: ${props => `${props.width}px`};
      left: 0;
    }

    @media (min-width: 600px) {
      width: 178px;
      font-size: 18px;
    }
`
const BorderDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: #F1F1F4;
  transform: matrix(1, 0, 0, -1, 0, 0);
  bottom: 15px;
`
export default function Tabs({
    currentTab,
    onTabClick,
}) {
    return (
        <TabWrapper>
            {
                currentTab === "UpcomingCampaigns"
                    ? <SelectedTab width={135}>
                        Upcoming Campaigns
                        <span className="border" />
                      </SelectedTab>
                    : <Tab onClick={() => onTabClick("UpcomingCampaigns")}>
                        Upcoming Campaigns
                      </Tab>
            }
            {
                currentTab === "LiveCampaigns"
                    ? <SelectedTab width={102}>
                        Live Campaign
                            <span className="border" />
                     </SelectedTab>
                    : <Tab onClick={() => onTabClick("LiveCampaigns")}>
                        Live Campaigns
                      </Tab>
            }
            {
                currentTab === "PastCampaigns"
                    ? <SelectedTab width={100}>
                        Past Campaigns
                            <span className="border" />
                      </SelectedTab>
                    : <Tab onClick={() => onTabClick("PastCampaigns")}>
                        Past Campaigns
                      </Tab>
            }
            <BorderDiv />
        </TabWrapper>
    )
}