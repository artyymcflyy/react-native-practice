import * as types from './types'

export const fetchMonth = ({ id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        dispatch(fetchMonthSuccess({ month: payload.data.months[id] }));
    } catch(error) {
        console.log(error);
    }
};

export const fetchMonthSuccess = ({ month }) => {
    return { type: types.FETCH_MONTH_SUCCESS, month }
};

const payload = {
    data: {
        months: [
            {
                id: 0,
                discount: '11',
                name: "art",
                totalDriveTime: "15",
                activityCount: "09",
                phoneUsage: "10",
                previousMonth: "July",
                nextMonth: "September"
            },
            {
                id: 1,
                discount: '12',
                name: "art",
                totalDriveTime: "30",
                activityCount: "12",
                phoneUsage: "22",
                previousMonth: "August",
                nextMonth: "October"
            },
            {
                id: 2,
                discount: '11',
                name: "art",
                totalDriveTime: "19",
                activityCount: "23",
                phoneUsage: "23",
                previousMonth: "September",
                nextMonth: "November"
            },
            {
                id: 3,
                discount: '20',
                name: "art",
                totalDriveTime: "25",
                activityCount: "15",
                phoneUsage: "5",
                previousMonth: "October",
                nextMonth: "December"
            }

        ]
    }
};