import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';

export const fetchTrips = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        dispatch(fetchTripsSuccess({ trips: payload.data.trips }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchTripsSuccess = ({ trips }) => {
    return { type: types.FETCH_TRIPS_SUCCESS, trips }
};

const payload = {
    data: {
        trips: [
            { 
                "id": 1, 
                "name": "Grocery Pizza",
                "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ],
                "startTime": 1415790500,
                "endTime": 1415791109
            },
            {  
               "id":2,
               "name":"Gas",
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    },
                    {
                        "img": 'https://www.biography.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTE1ODA0OTcxMzI5MDk1MTgx/beyonce-knowles-39230-3-raw.jpg'
                    }
                ],
                "startTime": 1415690500,
                "endTime": 1415791109
            },
            {  
               "id":3,
               "name":'Corys House',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ],
                "startTime": 1415290500,
                "endTime": 1415791109
            },
            {  
               "id":4,
               "name":'Parents House',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ],
                "startTime": 1412790500,
                "endTime": 1415791109
            },
            {  
               "id":5,
               "name":'Grocery Shopping',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    },
                    {
                        "img": 'https://www.biography.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTE1ODA0OTcxMzI5MDk1MTgx/beyonce-knowles-39230-3-raw.jpg'
                    }
                ],
                "startTime": 1413790500,
                "endTime": 1413790600
            },
            {  
               "id":6,
               "name":'Gas',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ],
                "startTime": 1315790500,
                "endTime": 1315791109
            },
            {  
               "id":7,
               "name":'Mount Major',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    },
                    {
                        "img": 'https://www.biography.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTE1ODA0OTcxMzI5MDk1MTgx/beyonce-knowles-39230-3-raw.jpg'
                    }
                ],
                "startTime": 1315790500,
                "endTime": 1315701109
            },
            {  
               "id":8,
               "name":'Gas',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ],
                "startTime": 1315790500,
                "endTime": 1315791109
            },
            {  
               "id":9,
               "name":'Things for real',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    },
                    {
                        "img": 'https://www.biography.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTE1ODA0OTcxMzI5MDk1MTgx/beyonce-knowles-39230-3-raw.jpg'
                    }
                ],
                "startTime": 1415790500,
                "endTime": 1415791109
            },
            {  
               "id":10,
               "name":'Gas',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ],
                "startTime": 1415790500,
                "endTime": 1415791109
            }
        ]
    }
};