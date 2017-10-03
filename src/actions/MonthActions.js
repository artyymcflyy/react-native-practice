import * as types from './types'

export const fetchMonth = (id) => async dispatch => {
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
                discount: 9,
                name: "art",
                totalDriveTime: "15",
                activityCount: "9",
                phoneUsage: "10",
                currentMonth: "August",
            },
            {
                id: 1,
                discount: 5,
                name: "art",
                totalDriveTime: "30",
                activityCount: "12",
                phoneUsage: "22",
                currentMonth: "September"
            },
            {
                id: 2,
                discount: 17,
                name: "art",
                totalDriveTime: "19",
                activityCount: "23",
                phoneUsage: "23",
                currentMonth: "October"
            },
            {
                id: 3,
                discount: 20,
                name: "art",
                totalDriveTime: "25",
                activityCount: "15",
                phoneUsage: "5",
                currentMonth: "November"
            }

        ]
    }
};