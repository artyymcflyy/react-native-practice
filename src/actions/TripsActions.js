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
                ] 
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
                ]
            },
            {  
               "id":3,
               "name":'Corys House',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ]
            },
            {  
               "id":4,
               "name":'Parents House',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ]
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
                ]
            },
            {  
               "id":6,
               "name":'Gas',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ]
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
                ]
            },
            {  
               "id":8,
               "name":'Gas',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ]
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
                ]
            },
            {  
               "id":10,
               "name":'Gas',
               "users": [
                    {
                        "img": 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'
                    }
                ]
            }
        ]
    }
};