import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';

export const fetchUsers = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        dispatch(fetchUsersSuccess({ users: payload.data.users }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchUsersSuccess = ({ users }) => {
    return { type: types.FETCH_USERS_SUCCESS, users }
};

const payload = {
    data: {
        users: [
            { 
                "id": 1, 
                "name": "Brad",
                "img": "https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg",
                "score": 4.5,
                "usage": 7,
                "medal": "http://vignette2.wikia.nocookie.net/criminal-case-grimsborough/images/a/a9/Gold_Medal_%28CCW_Awards%29.png/revision/latest?cb=20160101140102"
            },
            {  
               "id":2,
               "name":"'Yonce",
               "img": "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Ch_406%2Cq_50%2Cw_620/MTE1ODA0OTcxMzI5MDk1MTgx/beyonce-knowles-39230-3-raw.jpg",
               "score": 3.2,
               "usage": 33,
               "medal": "http://www.pngall.com/wp-content/uploads/2017/03/Silver-Medal-Free-Download-PNG.png"
            },
            {  
               "id":3,
               "name":"Demi",
               "img": "https://cbsnews3.cbsistatic.com/hub/i/r/2016/09/05/023c530e-9dc1-4299-93f1-3bb76fdc3ceb/resize/620x465/fac0505a1a7b10e837623d2e0b3f60d3/demi-lovato-getty-519607438.jpg",
               "score": 1.4,
               "usage": 67,
               "medal": "http://vignette4.wikia.nocookie.net/criminal-case-grimsborough/images/7/71/Bronze_Medal_%28CCW_Awards%29.png/revision/latest?cb=20160101140520"
            }
        ]
    }
};