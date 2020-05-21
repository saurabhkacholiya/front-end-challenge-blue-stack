export const diffBetweenCurrentDateAndGivenDate = function(date) {
    const dt1 = new Date();
    const dt2 = new Date(date);
    const difference =  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    if(difference === 0){
        return {
            tab: 'LiveCampaigns',
            value: `Current Live`,
        }
    }else if( difference > 0){
        return {
            tab: 'UpcomingCampaigns',
            value: `${difference} Days Head`
        }
    }else{
        return {
            tab: 'PastCampaigns',
            value: `${Math.abs(difference)} Days Ago`
        }
    }
}