
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.EventDetails';

export default defineMessages({
    Empty: {
        id: `${scope}.Empty`,
        defaultMessage: 'List is Empty!!',
    },
    date:{
        id: `${scope}.date`,
        defaultMessage: 'DATE',
    },
    campaign:{
        id: `${scope}.campaign`,
        defaultMessage: 'CAMPAIGN',
    },
    view:{
        id: `${scope}.view`,
        defaultMessage: 'VIEW',
    },
    action:{
        id: `${scope}.action`,
        defaultMessage: 'ACTIONS',
    },
    viewPrice: {
        id: `${scope}.viewPrice`,
        defaultMessage:'View Pricing',
    },
    report: {
        id: `${scope}.report`,
        defaultMessage:'Report',
    },
    scheduleAgain :{
        id: `${scope}.scheduleAgain`,
        defaultMessage: 'Schedule Again',
    }
});